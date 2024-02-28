/// This file extends the PrismJS C++ syntax:
/// - predefines standard library types (they work only if prefixed with std::)
/// - predefines standard library sub-namespaces (std::ranges, std::chrono, etc.)
/// - redefines the keyword pattern to include missing keywords (`true`, `false` were missing somehow)
/// - adds support for manual tweaking of the syntax highlighting:
///    - `// prism-push-types` and `// prism-pop-types` can be used to add/remove types from the syntax highlighting

import * as PrismNS from "prismjs";

const PRISM_PATCH_NAME = "cpp";

const PUSH_TYPES_PREFIX = "// prism-push-types:";
const POP_TYPES_PREFIX = "// prism-pop-types";

/**
 * Pattern for PascalCase names that are treated as class names
 * in C++ code by our custom syntax highlighting.
 */
const PASCAL_CASE_NAME_PATTERN = "[A-Z][a-zA-Z_][a-zA-Z0-9_]*";

/**
 * Common short type name patterns that are used in C++ code
 * like `T`, `T1`, `U`, `U1`, `V`, etc.
 */
const COMMON_TYPE_NAME_PATTERNS = ["[TUVWXYZ][0-9]?"];

const CPP_KEYWORDS: string[] = [
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

const CPP_STD_TYPES: string[] = [
  // Integers
  "int8_t", "uint8_t", "int_least8_t", "uint_least8_t", "int_fast8_t", "uint_fast8_t",
  "int16_t", "uint16_t", "int_least16_t", "uint_least16_t", "int_fast16_t", "uint_fast16_t",
  "int32_t", "uint32_t", "int_least32_t", "uint_least32_t", "int_fast32_t", "uint_fast32_t",
  "int64_t", "uint64_t", "int_least64_t", "uint_least64_t", "int_fast64_t", "uint_fast64_t",
  "intptr_t", "uintptr_t",
  "intmax_t", "uintmax_t",
  "size_t", "ssize_t",
  "ptrdiff_t",

  // Containers:
  "array",
  "vector",
  "queue", "deque", "priority_queue",
  "map", "unordered_map",
  "multimap", "unordered_multimap",
  "set", "unordered_set",
  "multiset", "unordered_multiset",
  "forward_list", "list",
  "stack",
  "valarray",
  "initializer_list",

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
  "istream", "wistream",
  "ostream", "wostream",
  "iostream", "wiostream",
  "fstream", "wfstream",
  "ifstream", "wifstream",
  "ofstream", "wofstream",
  "stringstream", "wstringstream",
  "istringstream", "wistringstream",
  "ostringstream", "wostringstream",
  "streambuf", "wstreambuf",
  "filebuf", "wfilebuf",
  "ios", "wios",

  "syncbuf", "wsyncbuf",
  "spanstream", "wspanstream",

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

const CPP_STD_SUB_NAMESPACES: string[] = [
  "ranges",
  "chrono",
  "filesystem",
  "this_thread",
  "string_literals",
  "string_view_literals"
];

type SingleToken = string | PrismNS.Token;

type WalkTokenCallback = (context: SingleToken) => void;

type PrismExtended = typeof PrismNS & {
  patches?: {
    [key in string]?: boolean;
  };
};

export default function main(prism: PrismExtended) {
  prism.patches = prism.patches || {};
  if (prism.patches[PRISM_PATCH_NAME] === true) {
    return;
  }
  prism.patches[PRISM_PATCH_NAME] = true;

  if (typeof self === "undefined" || !self.document) {
    return;
  }

  prism.languages.cpp["keyword"] = new RegExp(`\\b(?:${CPP_KEYWORDS.join("|")})\\b`);

  prism.languages.cpp["class-name"] = [
    ...prism.languages.cpp["class-name"],
    new RegExp(`\\b(${CPP_STD_TYPES.join("|")})\\b`),
  ];

  prism.languages.insertBefore("cpp", "keyword", {
    "namespace": [
      {
        pattern: /(\b(?:namespace|using)\s+)[a-zA-Z_][a-zA-Z0-9_]+/g,
        lookbehind: true,
      },
      {
        // ranges, chrono, filesystem preceded by std::
        pattern: new RegExp(`(std::)(${CPP_STD_SUB_NAMESPACES.join("|")})`),
        lookbehind: true,
      },
      { pattern: /\b(std)/g },
    ]
  });

  prism.hooks.add("after-tokenize", handleSpecialComments);
  prism.hooks.add("after-tokenize", applyTokenFixes);
}

function walkTokenStream(stream: PrismNS.TokenStream, tokenHandler: WalkTokenCallback) {
  if (!Array.isArray(stream)) {
    return tokenHandler(stream);
  }

  for (const token of stream) {
    tokenHandler(token);
  }
}

function applyTokenFixes(env: PrismNS.Environment) {
  if (env.language !== "cpp") {
    return;
  }

  if (!Array.isArray(env.tokens)) {
    return;
  }

  walkTokenStream(env.tokens, applyTokenFixesOn);
}

function applyTokenFixesOn(token: PrismNS.Token | string): void {
  if (typeof token === "string") {
    return;
  }

  fixSingleToken(token);

  if (Array.isArray(token.content)) {
    walkTokenStream(token.content, applyTokenFixesOn);
  }
}

function fixSingleToken(token: PrismNS.Token) {
  fixDirectiveToken(token) || fixNamespaceToken(token);
}

/**
 * Fixes the following highlighting issue:
 * In the following code:
 * ```cpp
 * #include <iostream>
 * ```
 * the `include` directive is not highlighted as a directive.
 */
function fixDirectiveToken(token: PrismNS.Token): boolean {
  if (token.type !== "directive" || token.alias !== "keyword") {
    return false;
  }
  token.alias = "";
  return true;
}

/**
 * Fixes the following highlighting issue:
 * In the following code:
 * ```cpp
 * using namespace ns_name;
 * ```
 * the `namespace` keyword is not highlighted as a keyword.
 */
function fixNamespaceToken(token: PrismNS.Token): boolean {
  if (token.type !== "namespace" || token.content !== "namespace") {
    return false;
  }
  token.type = "keyword";
  return true;
}

type CppTypeNames = string[];

type CppTypeNamesLayers = Array<CppTypeNames>;

function handleSpecialComments(env: PrismNS.Environment) {
  if (env.language !== "cpp") {
    return;
  }

  const customTypes: CppTypeNamesLayers = [
    [PASCAL_CASE_NAME_PATTERN, ...COMMON_TYPE_NAME_PATTERNS],
  ];

  const walkTokens = (tokens: SingleToken[]) => {
    let lastLineWasSemanticComment = false;

    for (let idx = 0; idx < tokens.length; ++idx) {
      const token = tokens[idx]!;

      const skipNewLine = lastLineWasSemanticComment;
      lastLineWasSemanticComment = false;

      if (typeof token === "string") {
        tryHighlightCustomTypes(tokens, idx, skipNewLine, customTypes);
        continue;
      }

      if (Array.isArray(token.content)) {
        walkTokens(token.content);
        continue;
      }

      // At this point only try to parse special comments
      if (token.type !== "comment") {
        continue;
      }

      // Try parse a special comment
      if (tryParsePushComment(token, customTypes) || tryParsePopComment(token, customTypes)) {
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

function tryHighlightCustomTypes(tokens: SingleToken[], idx: number, skipNewLine: boolean, types: CppTypeNamesLayers): boolean {
  if (types.length === 0) {
    return false;
  }

  const token = tokens[idx]!;
  if (typeof token !== "string") {
    return false;
  }

  const matches = collectTypesIn(token, types);

  // rebuild tokens with custom types
  const newTokens: SingleToken[] = [];
  let lastEnd = 0;
  for (const match of matches) {
    if (match.start > lastEnd) {
      newTokens.push(token.substring(lastEnd, match.start));
    }
    newTokens.push(new PrismNS.Token("class-name", token.substring(match.start, match.end)));
    lastEnd = match.end;
  }
  if (lastEnd < token.length) {
    newTokens.push(token.substring(lastEnd));
  }

  if (skipNewLine) {
    if (newTokens.length > 0 && typeof newTokens[0] === "string") {
      const splitted = newTokens[0].split("\n");
      splitted.shift();
      newTokens.shift();
      if (splitted.length > 0) {
        newTokens.unshift(splitted.join("\n"));
      }
    }
  }

  tokens.splice(idx, 1, ...newTokens);
  return true;
}

function tryParsePushComment(token: PrismNS.Token, types: CppTypeNamesLayers): boolean {
  if (typeof token.content !== "string")
    return false;
  if (!token.content.startsWith(PUSH_TYPES_PREFIX))
    return false;
  // read types separated by a comma
  const toInsert = token.content.substring(PUSH_TYPES_PREFIX.length).split(",");
  types.push(toInsert);
  return true;
}

function tryParsePopComment(token: PrismNS.Token, types: CppTypeNamesLayers): boolean {
  if (typeof token.content !== "string")
    return false;
  if (!token.content.startsWith(POP_TYPES_PREFIX))
    return false;

  types.pop();
  return true;
}

function collectTypesIn(token: string, types: CppTypeNamesLayers) {
  // search for words that match custom types, but not if they are part of a larger word
  const regex = new RegExp(`\\b(${types.flat().join("|")})\\b`, "g");
  // search all occurrences
  let match;
  const matches: { start: number, end: number }[] = [];
  while ((match = regex.exec(token)) !== null) {
    matches.push({ start: match.index, end: regex.lastIndex });
  }

  return matches;
}