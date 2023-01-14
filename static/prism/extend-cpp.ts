/// This file extends the PrismJS C++ syntax:
/// - predefines standard library types (they work only if prefixed with std::)
/// - predefines standard library sub-namespaces (std::ranges, std::chrono, etc.)
/// - redefines the keyword pattern to include missing keywords (`true`, `false` were missing somehow)
/// - adds support for manual tweaking of the syntax highlighting:
///    - `// prism-push-types` and `// prism-pop-types` can be used to add/remove types from the syntax highlighting

import Prism from "prism-react-renderer/prism";


const keywords = [
	"alignas", "alignof", "and", "asm", "auto",
	"bool", "break",
	"case", "catch", "char", "char16_t", "char32_t", "char8_t", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const", "const_cast", "consteval", "constexpr", "constinit", "continue",
	"decltype", "default", "delete", "do", "double", "dynamic_cast",
	"else", "enum", "explicit", "export", "extern",
	"false", "final", "float", "for", "friend",
	"goto", "if", "import", "inline", "int", 
	"long",
	"module", "mutable",
	"namespace", "new", "noexcept", "not", "nullptr",
	"operator", "or", "override",
	"private", "protected", "public",
	"register", "reinterpret_cast", "requires", "return",
	"short", "signed", "sizeof", "static", "static_assert", "static_cast", "struct", "switch",
	"template", "this", "thread_local", "throw", "true", "try", "typedef", "typeid", "typename",
	"union", "unsigned", "using",
	"virtual", "void", "volatile",
	"wchar_t", "while",
];


const standardLibraryTypes = [
	// Integers
	"int8_t",	"uint8_t",	"int_least8_t",		"uint_least8_t",	"int_fast8_t",	"uint_fast8_t",
	"int16_t",	"uint16_t",	"int_least16_t",	"uint_least16_t",	"int_fast16_t",	"uint_fast16_t",
	"int32_t",	"uint32_t",	"int_least32_t",	"uint_least32_t",	"int_fast32_t",	"uint_fast32_t",
	"int64_t",	"uint64_t",	"int_least64_t",	"uint_least64_t",	"int_fast64_t",	"uint_fast64_t",
	"intptr_t",	"uintptr_t",
	"intmax_t",	"uintmax_t",
	"size_t",	"ssize_t",
	"ptrdiff_t",
	
	// Containers:
	"array",
	"vector",
	"queue",		"deque",				"priority_queue",
	"map",			"unordered_map",
	"multimap",		"unordered_multimap",
	"set",			"unordered_set",
	"multiset",		"unordered_multiset",
	"forward_list",	"list",
	"stack",
	"valarray",

	// Strings
	"basic_string",
	"string",
	"wstring",
	"u16string",
	"u32string",
	"basic_string_view",
	"string_view",
	"wstring_view",
	"u16string_view",
	"u32string_view",

	// Other
	"tuple",
	"pair",
	"bitset",
	"complex",
	"optional",
	"any",
	"variant",
	"span",

	// IO
	"basic_istream",
	"basic_ostream",
	"basic_iostream",
	"basic_filebuf",
	"basic_fstream",
	"basic_ifstream",
	"basic_ofstream",
	"istream",			"wistream",
	"ostream",			"wostream",
	"iostream",			"wiostream",
	"fstream",			"wfstream",
	"ifstream",			"wifstream",
	"ofstream",			"wofstream",
	"stringstream",		"wstringstream",
	"istringstream",	"wistringstream",
	"ostringstream",	"wostringstream",
	"streambuf",		"wstreambuf",
	"filebuf",			"wfilebuf",
	"ios",				"wios",

	"syncbuf",			"wsyncbuf",
	"spanstream",		"wspanstream",

	"high_resolution_clock",
	"steady_clock",
	"system_clock",

	"scoped_lock",
	"shared_lock",
	"unique_lock",
	"lock_guard",

	"mutex",
	"thread",
	"jthread"
];

const standardLibrarySubNamespaces = [
	"ranges",
	"chrono",
	"filesystem",
	"this_thread",
	"string_literals",
	"string_view_literals"
];


Prism.languages.cpp["keyword"] = new RegExp(`\\b(?:${keywords.join("|")})\\b`);

Prism.languages.cpp["class-name"] = [
	...Prism.languages.cpp["class-name"],
	new RegExp(`\\b(${standardLibraryTypes.join("|")})\\b`),
];

Prism.languages.insertBefore("cpp", "keyword", {
	"namespace": [
		{
			pattern: /(\b(?:namespace|using)\s+)[a-zA-Z_][a-zA-Z0-9_]+/g,
			lookbehind: true,
		},
		{
			// ranges, chrono, filesystem preceded by std::
			pattern: new RegExp(`(std::)(${standardLibrarySubNamespaces.join("|")})`),
			lookbehind: true,
		},
		{ pattern: /\b(std)/g },
	]
});

interface PrismEnv {
	code: string;
	language: string;
	tokens: Prism.Token[];
}

function applyTokenFixes(env: PrismEnv)
{
	const walkTokens = (tokens: Prism.Token[]) => {
		for (const token of tokens)
		{
			if (typeof token !== "object")
				continue;

			if (token.type === "directive" && token.alias === "keyword")
			{
				delete token.alias;
			}
			else if (token.type === "namespace" && token.content === "namespace")
			{
				token.type = "keyword";
			}

			if (Array.isArray(token.content)) {
				walkTokens(token.content);
			}
		}
	};

	walkTokens(env.tokens);
}

function handleSpecialComments(env: PrismEnv) {
	if (env.language !== "cpp")
		return;
	
	const pushTypesPrefix	= "// prism-push-types:";
	const popTypes			= "// prism-pop-types";

	const customTypeNames = new Array<string[]>();
	
	const walkTokens = (tokens: Prism.Token[]) => {
		let lastLineWasSemanticComment = false;

		const tryParsePushComment = (token: Prism.Token) => {
			if (!token.content.startsWith(pushTypesPrefix))
				return false;
			// read types separated by a comma
			const types = token.content.substring(pushTypesPrefix.length).split(",");
			customTypeNames.push(...types);
			return true;
		};

		const tryParsePopComment = (token: Prism.Token) => {
			if (!token.content.startsWith(popTypes))
				return false;
			
			customTypeNames.pop();
			return true;
		};


		for (let idx = 0; idx < tokens.length; ++idx)
		{
			const token = tokens[idx];

			const skipNewLine = lastLineWasSemanticComment;
			lastLineWasSemanticComment = false;

			if (typeof token === "string" && customTypeNames.length !== 0)
			{
				// search for words that match custom types, but not if they are part of a larger word
				const regex = new RegExp(`\\b(${customTypeNames.join("|")})\\b`, "g");
				// search all occurrences
				let match;
				const matches: { start: number, end: number }[] = [];
				while ((match = regex.exec(token)) !== null) {
					matches.push({ start: match.index, end: regex.lastIndex });
				}

				// rebuild tokens with custom types
				const newTokens: Prism.Token[] = [];
				let lastEnd = 0;
				for (const match of matches)
				{
					if (match.start > lastEnd)
					{
						newTokens.push(token.substring(lastEnd, match.start));
					}
					newTokens.push(new Prism.Token("class-name", token.substring(match.start, match.end)));
					lastEnd = match.end;
				}
				if (lastEnd < token.length)
				{
					newTokens.push(token.substring(lastEnd));
				}
				
				if (skipNewLine) {
					if (newTokens.length > 0 && typeof newTokens[0] === "string") {
						const splitted = newTokens[0].split("\n");
						splitted.shift();
						newTokens.shift();
						if (splitted.length > 0) newTokens.unshift(splitted.join("\n"));
					}
				}
				tokens.splice(idx, 1, ...newTokens);
				continue;
			}

			if (Array.isArray(token.content))
			{
				walkTokens(token.content);
				continue;
			}

			// At this point only try to parse special comments
			if (token.type !== "comment")
			{
				continue;
			}

			// Try parse a special comment
			if (tryParsePushComment(token) || tryParsePopComment(token))
			{
				// Ignore that line
				tokens.splice(idx, 1);

				lastLineWasSemanticComment = true;
				--idx;
				continue;
			}
		}	
	};

	walkTokens(env.tokens);
}

function enableFeatures() {
	if (typeof self === "undefined" || !self.document) {
		return;
	}

	Prism.hooks.add("after-tokenize", handleSpecialComments);
	Prism.hooks.add("after-tokenize", applyTokenFixes);
}


enableFeatures();