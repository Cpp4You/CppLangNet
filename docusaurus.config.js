const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
				path: 'docs/learn',
				routeBasePath: 'learn',
				sidebarPath: require.resolve('./sidebars.js'),
				editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
				editLocalizedFiles: true,
			}, 
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'tools',
				path: 'docs/tools',
				routeBasePath: 'tools',
				sidebarPath: require.resolve('./sidebars.js'),
				editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
				editLocalizedFiles: true,
			}, 
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'features',
				path: 'docs/features',
				routeBasePath: 'features',
				sidebarPath: require.resolve('./sidebars.js'),
				editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
				editLocalizedFiles: true,
			}, 
		],
	],

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'docs/cpp-docs',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/',
					editLocalizedFiles: true,
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/PoetaKodu/CppLangNet/edit/main/blog/',
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
					{ to: '/learn/index', label: 'Learn', position: 'left' },
					{ to: '/docs/index', label: 'Docs', position: 'left' },
					{ to: '/features/index', label: 'Features', position: 'left' },
					{ to: '/tools/index', label: 'Tools', position: 'left' },
					{ to: '/blog', label: 'Blog', position: 'left'},
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
								to: '/learn/index',
							},
							{
								label: 'Documentation',
								to: '/docs/index',
							},
							{
								label: 'Features',
								to: '/features/index',
							},
							{
								label: 'Tools',
								to: '/tools/index',
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
