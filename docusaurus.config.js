const path				= require("path");
const lightCodeTheme	= require("./src/prism/theme-vscode-light");
const darkCodeTheme		= require("./src/prism/theme-vscode-dark");

const remarkDisableTokenizers = require("remark-disable-tokenizers");

const remarkConfig = [
	[
		remarkDisableTokenizers,
		{
			"block": ["indentedCode"]
		}
	]
];


function filterSidebarItems(items)
{
	const result = [];

	for(let key in items)
	{
		if (items[key].type === "category")
		{
			if (items[key].label === "_codes")
				continue;
			else
			{
				result[key] = items[key];
				result[key].items = filterSidebarItems(result[key].items);
			}
		}
		else {
			result[key] = items[key];
		}

		// if (result[key].label)
		// 	result[key].label = `${key}. ${result[key].label}`; 
	}

	return result;
}

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
	title:					"C++ Programming Language",
	tagline:				"Learn how to build blazing fast software",
	url:					"https://cpp-lang.net",
	baseUrl:				"/",
	onBrokenLinks:			"ignore",
	onBrokenMarkdownLinks:	"ignore",
	favicon:				"img/favicon.png",
	organizationName:		"Cpp4You", // Usually your GitHub org/user name.
	projectName:			"CppLangNet", // Usually your repo name.
	trailingSlash: 			true,

	scripts: [
		"/js/giscus.js",
		"/js/scroll.js",
		{
			src: "https://tenor.com/embed.js",
			async: true,
		},
	],

	i18n: {
		defaultLocale: "en",
		locales: [ "en", "pl", "de" ]
	},

	plugins: [
		[
			"docusaurus-plugin-module-alias",
			{
				alias: {
					"@site-comps": path.resolve(__dirname, "src/components/mdx"),
				},
			},
		],
		"docusaurus-plugin-sass",
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "learn",
				path: "content/learn",
				routeBasePath: "learn",
				sidebarPath: require.resolve("./sidebars/learn.js"),
				editUrl: "https://github.com/Cpp4You/CppLangNet/edit/main/",
				editLocalizedFiles: true,
				showLastUpdateTime: false,
				showLastUpdateAuthor: false,
				remarkPlugins: remarkConfig,
			}, 
		],
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "tools",
				path: "content/tools",
				routeBasePath: "tools",
				sidebarPath: require.resolve("./sidebars/tools.js"),
				editUrl: "https://github.com/Cpp4You/CppLangNet/edit/main/",
				editLocalizedFiles: true,
				showLastUpdateTime: false,
				showLastUpdateAuthor: false,
				remarkPlugins: remarkConfig,
			},
		],
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "community",
				path: "content/community",
				routeBasePath: "community",
				sidebarPath: require.resolve("./sidebars/community.js"),
				editUrl: "https://github.com/Cpp4You/CppLangNet/edit/main/",
				editLocalizedFiles: true,
				showLastUpdateTime: false,
				showLastUpdateAuthor: false,
				remarkPlugins: remarkConfig,
			},
		],
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "contributing",
				path: "content/contributing",
				routeBasePath: "contributing",
				sidebarPath: require.resolve("./sidebars/contributing.js"),
				editUrl: "https://github.com/Cpp4You/CppLangNet/edit/main/",
				editLocalizedFiles: true,
				showLastUpdateTime: false,
				showLastUpdateAuthor: false,
				remarkPlugins: remarkConfig,
			},
		],
	],

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: "content/docs",

					sidebarPath: require.resolve("./sidebars/docs.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/Cpp4You/CppLangNet/edit/main/",
					editLocalizedFiles: true,
					showLastUpdateTime: false,
					showLastUpdateAuthor: false,
					remarkPlugins: remarkConfig,
					exclude: [ "**/_codes/**.{mdx}" ],
					sidebarItemsGenerator: async function ({
						defaultSidebarItemsGenerator,
						...args
					}) {
						const sidebarItems = await defaultSidebarItemsGenerator(args);
						return filterSidebarItems(sidebarItems);
					},
				},
				blog: {
					showReadingTime: true,
					path: "content/blog",
					// Please change this to your repo.
					editUrl: "https://github.com/Cpp4You/CppLangNet/edit/main/blog/",
					remarkPlugins: remarkConfig,
				},
				theme: {
					customCss: require.resolve("./src/css/Custom.scss"),
				},
				gtag: {
					trackingID: "G-N768FKNY0R",
					anonymizeIP: true,
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			image: "img/favicon.png",
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			colorMode: {
				defaultMode: "dark"
			},
			navbar: {
				title: "C++ Language",
				logo: {
					alt: "C++ Language Logo",
					src: "img/cpp.svg",
				},
				items: [
					{ to: "/learn",			label: "Learn",				position: "left" },
					{ to: "/docs",			label: "Docs",				position: "left" },
					{ to: "/tools",			label: "Tools",				position: "left" },
					{ to: "/community",		label: "Community",			position: "left" },
					{ to: "/blog",			label: "Blog",				position: "left" },
					{ to: "/contributing",	label: "💗 Contributing",	position: "right" },
					// {
					// 	href: 'https://github.com/Cpp4You/CppLangNet/discussions/categories/forum',
					// 	label: '🗣 Community',
					// 	position: 'right',
					// },
					{
						type: "localeDropdown",
						position: "right",
					},
					{
						href: "https://discord.gg/NvBNvpgUHZ",
						position: "right",
						className: "header-discord-link",
						"aria-label": "Official Discord server",
					},
					{
						href: "https://github.com/Cpp4You/CppLangNet",
						position: "right",
						className: "header-github-link",
						"aria-label": "GitHub repository",
					},
				],
			},
			announcementBar: {
				content:
					"⚠ This site is still in an early phase of construction. You can help us by <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"/contributing\">contributing</a>. Consider giving us a ⭐ star on <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/Cpp4You/CppLangNet/stargazers\">GitHub</a>",
				backgroundColor: "#fafbfc",
				textColor: "#091E42",
				// isCloseable: false,
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Shortcut",
						items: [
							{
								label: "Learn C++",
								to: "/learn",
							},
							{
								label: "Documentation",
								to: "/docs",
							},
							{
								label: "Tools",
								to: "/tools",
							},
							{
								label: "Community",
								to: "/community",
							},
							{
								label: "Contributing",
								to: "/contributing",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Discord",
								href: "https://discord.gg/3MeXQ8TvBw",
							},
							{
								label: "Forum",
								href: "https://github.com/Cpp4You/CppLangNet/discussions/categories/forum",
							},
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/cpp",
							},
							{
								label: "Reddit",
								href: "https://reddit.com/r/cpp",
							}
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/Cpp4You/CppLangNet",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/PoetaKodu" target="_blank">Paweł Syska</a>, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: 		lightCodeTheme,
				darkTheme:	darkCodeTheme,
				scripts: ["extend-cpp"],
				additionalLanguages: ["log", "console"],
				magicComments: [
					{
						className: "code-block-highlighted-line",
						line: "highlight-next-line",
						block: { start: "highlight-start", end: "highlight-end" }
					},
					{
						className: "code-block-error-line",
						line: "error-next-line",
					},
					{
						className: "code-block-warning-line",
						line: "warning-next-line",
					}
				]
			},
		}),
});
