import Prism from "prism-react-renderer/prism";

// Prism.hooks.add("after-tokenize", function(env) {

// 	env.tokens.forEach((tok, id, arr) => {
// 		if (typeof tok !== "string") {
// 			console.log(tok);
// 			return;
// 		}

// 		if (tok === "cout")
// 		{
// 			env.tokens[id] = new Prism.Token("keyword", "cout", undefined, tok);
// 		}
// 	});
// });

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

(function(){
	console.log(Prism.hooks);
	if (typeof self === "undefined" || !self.document || !document.querySelector) {
		return;
	}
	Prism.hooks.add("after-tokenize", function(env) {
		if (env.language !== "cpp")
			return;
		console.log(env);
		const pushTypesPrefix = "// prism-push-types:";
		const popTypes = "// prism-pop-types";

		const customTypeNames = new Array<string[]>();

		
		const walkTokens = (tokens: Prism.Token[]) => {
			let lastLineWasSemanticComment = false;
			for (let idx = 0; idx < tokens.length; ++idx)
			{
				const token = tokens[idx];

				const skipNewLine = lastLineWasSemanticComment;
				lastLineWasSemanticComment = false;

				if (typeof token === "string" && customTypeNames.length !== 0)
				{
					// search for words that match custom types, but not if they are part of a larger word
					const regex = new RegExp(`\\b(${customTypeNames.join("|")})\\b`, "g");
					console.log(`Matching ${regex} against ${token}...`);
					// search all occurrences
					let match;
					let iterations = 0;
					const matches: { start: number, end: number }[] = [];
					while ((match = regex.exec(token)) !== null) {
						console.log(
							`Found ${match[0]} start=${match.index} end=${regex.lastIndex}: ${token.substring(match.index, regex.lastIndex)}`,
						);
						matches.push({ start: match.index, end: regex.lastIndex });
						if (iterations++ > 100)
						{
							console.log("Infinite loop detected");
							break;
						}
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
					
					if (skipNewLine && newTokens.length > 0 && newTokens[0] === "\n")
					{
						newTokens.shift();
					}

					tokens.splice(idx, 1, ...newTokens);
					console.log("New tokens: ", newTokens);
					continue;
				}

				if (Array.isArray(token.content))
				{
					walkTokens(token.content);
					continue;
				}

				if (token.type === "comment" && token.content.startsWith(pushTypesPrefix))
				{
					// read types separated by a comma
					const types = token.content.substring(pushTypesPrefix.length).split(",");
					customTypeNames.push(...types);
					console.log("Got types: ", types);
					tokens.splice(idx, 1);
					lastLineWasSemanticComment = true;
					--idx;
					continue;
				}
			}
		};

		walkTokens(env.tokens);
		
	});
})();