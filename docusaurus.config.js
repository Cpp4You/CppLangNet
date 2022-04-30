const path				= require('path');
const lightCodeTheme	= require('prism-react-renderer/themes/github');
const darkCodeTheme		= require('prism-react-renderer/themes/vsDark');

const remarkDisableTokenizers = require('remark-disable-tokenizers');

const remarkConfig = [
		[
			remarkDisableTokenizers,
			{
				"block": ['indentedCode']
			}
		]
	];


function filterSidebarItems(items)
{
	const result = [];

	for(let key in items)
	{
		if (items[key].type === 'category')
		{
			if (items[key].label === '_codes')
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
	title:					'C++ Programming Language',
	tagline:				'Learn how to build blazing fast software',
	url:					'https://cpp-lang.net',
	baseUrl:				'/',
	onBrokenLinks:			'warn',
	onBrokenMarkdownLinks:	'warn',
	favicon:				'img/favicon.png',
	organizationName:		'PoetaKodu', // Usually your GitHub org/user name.
	projectName:			'CppLangNet', // Usually your repo name.
	trailingSlash: 			true,

	scripts: [
		"/js/giscus.js",
		{
			src: "https://tenor.com/embed.js",
			async: true,
		},
	],

	i18n: {
		defaultLocale: 'en',
		locales: [ 'en', 'pl' ]
	},

	plugins: [
		[
			'docusaurus-plugin-module-alias',
			{
				alias: {
					'@site-comps': path.resolve(__dirname, 'src/components/mdx'),
				},
			},
		],
		'docusaurus-plugin-sass',
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'learn',
				path: 'content/learn',
				routeBasePath: 'learn',
				sidebarPath: require.resolve('./sidebars/learn.js'),
				editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
				editLocalizedFiles: true,
				showLastUpdateTime: true,
				showLastUpdateAuthor: true,
				remarkPlugins: remarkConfig,
			}, 
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'tools',
				path: 'content/tools',
				routeBasePath: 'tools',
				sidebarPath: require.resolve('./sidebars/tools.js'),
				editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
				editLocalizedFiles: true,
				showLastUpdateTime: true,
				showLastUpdateAuthor: true,
				remarkPlugins: remarkConfig,
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'features',
				path: 'content/features',
				routeBasePath: 'features',
				sidebarPath: require.resolve('./sidebars/features.js'),
				editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
				editLocalizedFiles: true,
				showLastUpdateTime: true,
				showLastUpdateAuthor: true,
				remarkPlugins: remarkConfig,
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'contributing',
				path: 'content/contributing',
				routeBasePath: 'contributing',
				sidebarPath: require.resolve('./sidebars/contributing.js'),
				editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
				editLocalizedFiles: true,
				showLastUpdateTime: true,
				showLastUpdateAuthor: true,
				remarkPlugins: remarkConfig,
			},
		],
	],

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'content/docs',

					sidebarPath: require.resolve('./sidebars/docs.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
					editLocalizedFiles: true,
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
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
					editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/blog/',
					remarkPlugins: remarkConfig,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.scss'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			hideableSidebar: true,
			colorMode: {
				defaultMode: 'dark'
			},
			navbar: {
				title: 'C++ Language',
				logo: {
					alt: 'C++ Language Logo',
					src: 'img/cpp.svg',
				},
				items: [
					{ to: '/learn',			label: 'Learn',				position: 'left' },
					{ to: '/docs',			label: 'Docs',				position: 'left' },
					{ to: '/features',		label: 'Features',			position: 'left' },
					{ to: '/tools',			label: 'Tools',				position: 'left' },
					{ to: '/blog',			label: 'Blog',				position: 'left'},
					{ to: '/contributing',	label: '💗 Contributing',	position: 'right'},
					// {
					// 	href: 'https://github.com/PoetaKodu/CppLangNet/discussions/categories/forum',
					// 	label: '🗣 Community',
					// 	position: 'right',
					// },
					{
						type: 'localeDropdown',
						position: 'right',
					},
					{
						href: 'https://discord.gg/NvBNvpgUHZ',
						position: 'right',
						className: 'header-discord-link',
						'aria-label': 'Official Discord server',
					},
					{
						href: 'https://github.com/PoetaKodu/CppLangNet',
						position: 'right',
						className: 'header-github-link',
						'aria-label': 'GitHub repository',
					},
				],
			},
			announcementBar: {
				content:
					'⚠ This site is still in an early phase of construction. You can help us by <a target="_blank" rel="noopener noreferrer" href="/contributing">contributing</a>. Consider giving us a ⭐ star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/PoetaKodu/CppLangNet/stargazers">GitHub</a>',
				backgroundColor: '#fafbfc',
				textColor: '#091E42',
				isCloseable: false,
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Shortcut',
						items: [
							{
								label: 'Learn C++',
								to: '/learn',
							},
							{
								label: 'Documentation',
								to: '/docs',
							},
							{
								label: 'Features',
								to: '/features',
							},
							{
								label: 'Tools',
								to: '/tools',
							},
							{
								label: 'Contributing',
								to: '/contributing',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/3MeXQ8TvBw',
							},
							{
								label: 'Forum',
								href: 'https://github.com/PoetaKodu/CppLangNet/discussions/categories/forum',
							},
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/cpp',
							},
							{
								label: 'Reddit',
								href: 'https://reddit.com/r/cpp',
							}
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/PoetaKodu/CppLangNet',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/PoetaKodu" target="_blank">Paweł Syska</a>, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: 		lightCodeTheme,
				darkTheme:	darkCodeTheme,
			},
		}),
});
