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
	Method: 'sidebar-code sidebar-method',
	Operator: 'sidebar-code sidebar-operator-function',
};

const parseFlags = (flags) => {
	if (typeof flags === 'string')
		return ' sidebar-flag-' + flags;
	else if (Array.isArray(flags))
		return ' ' + flags.map(e => 'sidebar-flag-' + e).join(' ');
	return '';
}

const docsClass = (id, flags=[]) => ({
		id,
		type: 'doc', 
		className: CodeElements.Class + parseFlags(flags)
	});
const docsMethod = (id, flags=[]) => ({
		id,
		type: 'doc', 
		className: CodeElements.Method + parseFlags(flags)
	});
const docsFunction = (id, flags=[]) => ({
		id,
		type: 'doc', 
		className: CodeElements.Func + parseFlags(flags)
	});
const docsOperator = (id, flags=[]) => ({
		id,
		type: 'doc', 
		className: CodeElements.Operator + parseFlags(flags)
	});

const separatorBase = (content='<span/>', classes='sidebar-separator') => ({
			type: 'html',
			value: content,
			className: classes,
			defaultStyle: true,
		});

const sep = separatorBase();
const cat = (name) => separatorBase(`<span>${name}</span>`, 'sidebar-separator sidebar-category');

const parseClassItemShorthand = (id, e, flags=[]) => {
	if (typeof e !== 'string')
	{
		if (Array.isArray(e))
			return parseClassItemShorthand(id, e[0], e[1])
		else
			return e;
	}

	if (e.startsWith("f:")) // function
		return docsFunction(`${id}/${e.substr(2)}`, flags);
	else if (e.startsWith("m:")) // method
		return docsMethod(`${id}/${e.substr(2)}`, flags);
	else if (e.startsWith("op:")) // method
		return docsOperator(`${id}/${e.substr(3)}`, flags);
	else
		return `${id}/${e}`;
}

const docsClassCat = (label, id, flags, contents) => ({
		type: 'category',
		className: CodeElements.Class + parseFlags(flags),
		label,
		link: { type: 'doc', id: id },
		items: contents.map(e => parseClassItemShorthand(id, e))
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
								docsClassCat('array', 'std/containers/arrays/array', 'since-cpp11', [
										cat('Element access'),
										'm:at',
										'op:operator_subscript',
										'm:front',
										'm:back',
										'm:data',
										cat('Iterators'),
										'm:begin',
										'm:end',
										'm:rbegin',
										'm:rend',
										cat('Capacity'),
										'm:empty',
										'm:size',
										'm:max_size',
										cat('Operations'),
										'm:fill',
										'm:swap',
										cat('Non-member functions'),
										['f:to_array', 'since-cpp20'],
									]),
								docsClassCat('vector', 'std/containers/arrays/vector', '', [
									'constructors',
									'destructor',
									'op:operator_assign',
									'm:assign',
									'm:get_allocator',
									cat('Element access'),
									'm:at',
									'op:operator_subscript',
									'm:front',
									'm:back',
									'm:data',
									cat('Iterators'),
									['m:begin', 'since-cpp11'],
									['m:end', 'since-cpp11'],
									['m:rbegin', 'since-cpp11'],
									['m:rend', 'since-cpp11'],
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									'm:capacity',
									'm:reserve',
									['m:shrink_to_fit', 'since-cpp11'],
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									['m:emplace', 'since-cpp11'],
									'm:erase',
									'm:push_back',
									['m:emplace_back', 'since-cpp11'],
									'm:pop_back',
									'm:resize',
									'm:swap',
								]),
							]
						},
						{
							type: 'category',
							label: 'Strings',
							link: { type: 'doc', id: 'std/containers/strings/index' },
							items: [
								docsClassCat('string', 'std/containers/strings/string', '', ['constructor', 'm:at', 'm:get_allocator']),
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
				{
					type: 'category',
					label: 'Utility',
					items: [
						docsMethod('std/utility/forward', 'since-cpp11'),
					]
				},
			],
		},
	],
};
