/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const { cat } = require("./common");

const doc = (sidebarLabel, docId) => {
	return { type: "doc", label: sidebarLabel, id: docId };
};

const lessonsSeparator = cat("Lessons:");
const additionalSeparator = cat("Additional:");

module.exports = {
	defaultSidebar: [
		"index",
		{
			type: "category",
			label: "📖 C++ Course",
			collapsed: false,
			link: { type: "doc", id: "course/intro" },
			items: [
				{
					type: "category",
					label: "🟢 Basics",
					collapsed: false,
					items: [
						{
							type: "category",
							label: "1. First program",
							link: { type: "doc", id: "course/basics/first-program" },
							items: [
								additionalSeparator,
								doc("💢 Common problems", "course/basics/first-program/common-problems"),
								doc("📚 Exercises", "course/basics/first-program/exercises"),
							]
						},
						"course/basics/comments",
						{
							type: "category",
							label: "3. Variables",
							link: { type: "doc", id: "course/basics/variables/intro" },
							items: [
								lessonsSeparator,
								"course/basics/variables/intro",
								"course/basics/variables/operations",
								{
									type: "category",
									label: "3. Strings",
									link: { type: "doc", id: "course/basics/variables/strings" },
									items: [
										additionalSeparator,
										doc("💡 Examples", "course/basics/variables/strings/examples"),
										doc("💢 Common problems", "course/basics/variables/strings/common-problems"),
										doc("📚 Exercises", "course/basics/variables/strings/exercises"),
									]
								},
								additionalSeparator,
								doc("💡 Examples 🚧", "course/basics/variables/examples"),
								doc("💢 Common problems 🚧", "course/basics/variables/common-problems"),
								doc("📚 Exercises 🚧", "course/basics/variables/exercises"),
							]
						},
						{
							type: "category",
							label: "4. Conditions",
							link: { type: "doc", id: "course/basics/conditions/intro" },
							items: [
								lessonsSeparator,
								doc("1. Introduction", "course/basics/conditions/intro"),
								doc("2. Compound conditions", "course/basics/conditions/compound"),
								doc("3. Booleans", "course/basics/conditions/booleans"),
								additionalSeparator,
								doc("✅ Tips and style", "course/basics/conditions/tips"),
								doc("💡 Examples", "course/basics/conditions/examples"),
								doc("💢 Common problems 🚧", "course/basics/conditions/common-problems"),
								doc("📚 Exercises", "course/basics/conditions/exercises")
							]
						},
						{
							type: "category",
							label: "5. Arrays",
							link: { type: "doc", id: "course/basics/arrays/introduction" },
							items: [
								lessonsSeparator,
								"course/basics/arrays/introduction",
								{
									type: "category",
									label: "2. Dynamic arrays",
									link: { type: "doc", id: "course/basics/arrays/dynamic-arrays" },
									items: [
										additionalSeparator,
										doc("💡 Examples 🚧", "course/basics/arrays/dynamic-arrays/examples"),
										doc("💢 Common problems 🚧", "course/basics/arrays/dynamic-arrays/common-problems"),
										doc("📚 Exercises 🚧", "course/basics/arrays/dynamic-arrays/exercises"),
									]
								},
								{
									type: "category",
									label: "3. Fixed-size arrays",
									link: { type: "doc", id: "course/basics/arrays/fixed-size-arrays" },
									items: [
										additionalSeparator,
										doc("💡 Examples 🚧", "course/basics/arrays/fixed-size-arrays/examples"),
										doc("💢 Common problems 🚧", "course/basics/arrays/fixed-size-arrays/common-problems"),
										doc("📚 Exercises 🚧", "course/basics/arrays/fixed-size-arrays/exercises"),
									]
								},
								"course/basics/arrays/algorithms",
								"course/basics/arrays/c-style-arrays",
								additionalSeparator,
								doc("📚 Exercises 🚧", "course/basics/arrays/exercises"),
							]
						},
						"course/basics/loops",
						{
							type: "category",
							label: "7. Functions",
							link: { type: "doc", id: "course/basics/functions/functions" },
							items: [
								additionalSeparator,
								doc("💡 Examples 🚧", "course/basics/functions/examples"),
								doc("💢 Common problems 🚧", "course/basics/functions/common-problems"),
								doc("📚 Exercises 🚧", "course/basics/functions/exercises"),
							]
						},
						"course/basics/structures",
						"course/basics/inheritance",
						"course/basics/references",
						{
							type: "category",
							label: "11. Methods",
							link: { type: "doc", id: "course/basics/methods/methods" },
							items: [
								lessonsSeparator,
								doc("1. Introduction 🚧", "course/basics/methods/methods"),
								doc("2. Special methods 🚧", "course/basics/methods/special-methods"),
							]
						},
						"course/basics/polymorphism",
						"course/basics/aliases",
						"course/basics/namespaces",
						{
							type: "category",
							label: "📰 Articles",
							link: { type: "doc", id: "course/basics/articles/index" },
							items: [
								"course/basics/articles/console",
								"course/basics/articles/random",
								"course/basics/articles/files",
								"course/basics/articles/filesystem",
							]
						},
						{
							type: "category",
							label: "💻 Examples",
							items: [
								"course/basics/example-programs/simple-calc",
								"course/basics/example-programs/advanced-calc",
								"course/basics/example-programs/combat-arena",
							]
						},
					]
				},
				{
					type: "category",
					label: "🟡 Intermediate",
					items: [
						"course/intermediate/lambdas",
						"course/intermediate/references",
						"course/intermediate/pointers",
						"course/intermediate/constants",
						"course/intermediate/preprocessor",
						{
							type: "category",
							label: "6. Functions and operators",
							items: [
								"course/intermediate/funcs-and-ops/default-arguments",
								"course/intermediate/funcs-and-ops/function-overloading",
								"course/intermediate/funcs-and-ops/operator-overloading",
							]
						},
						"course/intermediate/templates",
						"course/intermediate/exceptions",
						{
							type: "category",
							label: "9. Classes",
							items: [
								"course/intermediate/classes/intro",
								"course/intermediate/classes/constructors",
								"course/intermediate/classes/destructors",
								"course/intermediate/classes/const-methods",
								"course/intermediate/classes/static-methods",
								"course/intermediate/classes/nested-classes",
								"course/intermediate/classes/class-namespaces",
							]
						},
						{
							type: "category",
							label: "11. Memory (I)",
							items: [
								"course/intermediate/memory/stack-and-heap",
								"course/intermediate/memory/arrays",
								"course/intermediate/memory/copying",
								"course/intermediate/memory/move-semantics",
								"course/intermediate/memory/smart-pointers",
							]
						},
						"course/intermediate/const-correctness",
						{
							type: "category",
							label: "📰 Articles",
							items: [
								"course/intermediate/articles/files",
							]
						},
					]
				},
				{
					type: "category",
					label: "🟠 Advanced",
					items: [
						"course/advanced/constants",
						{
							type: "category",
							label: "2. Templates (II)",
							items: [
								"course/advanced/templates/functions",
								"course/advanced/templates/classes",
								"course/advanced/templates/aliases",
								"course/advanced/templates/variables",
								"course/advanced/templates/fold-expr",
							]
						},
						"course/advanced/lambdas",
						{
							type: "category",
							label: "4. Classes (II)",
							items: [
								"course/advanced/classes/default-constructors",
								"course/advanced/classes/copy-constructor",
								"course/advanced/classes/move-constructors",
							]
						},
						{
							type: "category",
							label: "5. Exceptions (II)",
							items: [
								"course/advanced/exceptions/in-constructor",
								"course/advanced/exceptions/noexcept",
							]
						},
						"course/advanced/iterators",
						"course/advanced/references",
						"course/advanced/preprocessor",
						{
							type: "category",
							label: "9. Memory (II)",
							items: [
								"course/advanced/memory/raw-arrays",
								"course/advanced/memory/pointers",
								"course/advanced/memory/new-and-delete",
							]
						},
					]
				},
			],
		},

		{
			type: "category",
			label: "Editing code",
			items: [
				"editing-code/using-debugger",
				"editing-code/refactoring",
			]
		},

		{
			type: "category",
			label: "Compilation",
			items: [
				"compilation/what-is-compiler",
				"compilation/compilation-process",
				"compilation/preprocessor",
				"compilation/linker",
				"compilation/multiple-files",
				"compilation/target-types",
				{
					type: "category",
					label: "Compiler flags 🚩",
					items: [
						"compilation/flags/lang-standard",
						"compilation/flags/fast-math",
						"compilation/flags/visibility",
					]
				}
			]
		},
		
		{
			type: "category",
			label: "Advices 💰",
			items: [
				"golden-advices/memory",
			]
		},
	],
};
