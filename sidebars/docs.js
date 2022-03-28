/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const CodeElements = {
	Class: 'sidebar-code sidebar-class-name',
	Func: 'sidebar-code sidebar-function',
};

const docsClass = (id) => ({
		id,
		type: 'doc', 
		className: CodeElements.Class
	});
const docsMethod = (id) => ({
		id,
		type: 'doc', 
		className: CodeElements.Func
	});


module.exports = {
	defaultSidebar: [
		'index',
		'useful-links',
		{
			type: 'category',
			label: 'Standard Library',
			collapsed: false,
			link: { type: 'doc', id: 'std/index' },
			items: [
				{
					type: 'category',
					label: 'Math',
					items: [
						'std/math/mathematical_functions',
						'std/math/mathematical_special_functions',
						'std/math/numeric_algorithms',
					]
				},
				{
					type: 'category',
					label: 'Containers',
					link: { type: 'doc', id: 'std/containers/index' },
					items: [
						{
							type: 'category',
							label: 'Arrays',
							link: { type: 'doc', id: 'std/containers/arrays/index' },
							items: [
								docsClass('std/containers/arrays/array'),
								docsClass('std/containers/arrays/vector'),
							]
						},
						{
							type: 'category',
							label: 'Strings',
							link: { type: 'doc', id: 'std/containers/strings/index' },
							items: [
								{
									type: 'category',
									className: CodeElements.Class,
									label: 'string',
									link: { type: 'doc', id: 'std/containers/strings/string' },
									items: [
										'std/containers/strings/string/constructor',
										docsMethod('std/containers/strings/string/at'),
										docsMethod('std/containers/strings/string/get_allocator'),
									]
								},
								docsClass('std/containers/strings/string_view'),
							]
						},
						{
							type: 'category',
							label: 'Queues',
							link: { type: 'doc', id: 'std/containers/queues/index' },
							items: [
								docsClass('std/containers/queues/queue'),
								docsClass('std/containers/queues/priority-queue'),
							]
						},
						{
							type: 'category',
							label: 'Maps and dictionaries',
							link: { type: 'doc', id: 'std/containers/maps/index' },
							items: [
								docsClass('std/containers/maps/map'),
								docsClass('std/containers/maps/multimap'),
								docsClass('std/containers/maps/unordered_map'),
								docsClass('std/containers/maps/unordered_multimap'),
							]
						},
						{
							type: 'category',
							label: 'Sets',
							link: { type: 'doc', id: 'std/containers/sets/index' },
							items: [
								docsClass('std/containers/sets/set'),
								docsClass('std/containers/sets/unordered-set'),
							]
						},
					]
				},
			],
		},
	],
};
