/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
	defaultSidebar: [
		'index',
		'initial-setup',
		'folder-structure',
		'new-documents',
		{
			type: 'category',
			label: '✍ Writing guide',
			collapsed: false,
			items: [
				'writing-guide/improving',
				'writing-guide/general-rules',
				'writing-guide/using-components',
				'writing-guide/translating',
			]
		},
		'default-documents',
	],
};
