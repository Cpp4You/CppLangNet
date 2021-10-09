const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

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

	i18n: {
		defaultLocale: 'en',
		locales: [ 'en', 'pl' ]
	},

	plugins: [
		'docusaurus-plugin-sass',

		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'learn',
				path: 'content/learn',
				routeBasePath: 'learn',
				sidebarPath: require.resolve('./sidebars.js'),
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
				sidebarPath: require.resolve('./sidebars.js'),
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
				sidebarPath: require.resolve('./sidebars.js'),
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
				sidebarPath: require.resolve('./sidebars.js'),
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
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
					editLocalizedFiles: true,
					showLastUpdateTime: true,
					showLastUpdateAuthor: true,
					remarkPlugins: remarkConfig,
					exclude: [ "**/codes/**.{mdx}" ],
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
					{ to: '/learn',			label: 'Learn',			position: 'left' },
					{ to: '/docs',			label: 'Docs',			position: 'left' },
					{ to: '/features',		label: 'Features',		position: 'left' },
					{ to: '/tools',			label: 'Tools',			position: 'left' },
					{ to: '/blog',			label: 'Blog',			position: 'left'},
					{ to: '/contributing',	label: 'Contributing',	position: 'right'},
					{
						href: 'https://github.com/PoetaKodu/CppLangNet',
						label: 'GitHub',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					},
				],
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
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/cpp',
							},
							{
								label: 'Discord',
								href: 'https://discord.gg/3MeXQ8TvBw',
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
				copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/PoetaKodu">Paweł Syska</a>, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: 		lightCodeTheme,
				darkTheme:	darkCodeTheme,
			},
		}),
});
