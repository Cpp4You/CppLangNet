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