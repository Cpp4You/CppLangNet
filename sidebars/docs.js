/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const { Category } = require("@material-ui/icons");
const {
	parseFlags,
	docsClass,
	docsMethod,
	docsFunction,
	docsOperator,
	separatorBase,
	cat,
	parseClassItemShorthand,
	docsClassCat,
} = require("./common");


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
					items: [{
							type: 'category',
							label: 'Mathematical Functions',
							link: { type: 'doc', id: 'std/math/mathematical_functions/index' },
							items: [
								{
									type: 'category',
									label: 'Basic Operations',
									items: [
										docsClassCat('abs', 'std/math/mathematical_functions/abs', '', []),
										docsClassCat('div', 'std/math/mathematical_functions/div', '', []),
										docsClassCat('fmod', 'std/math/mathematical_functions/fmod', '', [],),
		
										docsClassCat('remainder', 'std/math/mathematical_functions/remainder', '', [],),
										docsClassCat('remquo', 'std/math/mathematical_functions/remquo', '', [],),
										docsClassCat('fma', 'std/math/mathematical_functions/fma', '', [],),
										docsClassCat('fmax', 'std/math/mathematical_functions/fmax', '', [],),
										docsClassCat('fmin', 'std/math/mathematical_functions/fmin', '', [],),
										docsClassCat('fdim', 'std/math/mathematical_functions/fdim', '', [],),
										docsClassCat('nan', 'std/math/mathematical_functions/nanf', '', [],),

								]},

								{
									type: 'category',
									label: 'Exponential Functions',
									items: [
										docsClassCat('exp', 'std/math/mathematical_functions/exp', '', [],),
										docsClassCat('exp2', 'std/math/mathematical_functions/exp2', '', [],),
										docsClassCat('expm1', 'std/math/mathematical_functions/expm1', '', [],),
										docsClassCat('log', 'std/math/mathematical_functions/log', '', [],),
										docsClassCat('log10', 'std/math/mathematical_functions/log10', '', [],),
										docsClassCat('log2', 'std/math/mathematical_functions/log2', '', [],),
										docsClassCat('log1p', 'std/math/mathematical_functions/log1p', '', [],),
								]},

								{
									type: 'category',
									label: 'Power Functions',
									items: [
										docsClassCat('pow', 'std/math/mathematical_functions/pow', '', [],),
										docsClassCat('sqrt', 'std/math/mathematical_functions/sqrt', '', [],),
										docsClassCat('cbrt', 'std/math/mathematical_functions/cbrt', '', [],),
										docsClassCat('hypot', 'std/math/mathematical_functions/hypot', '', [],),
								]},

								{
									type: 'category',
									label: 'Trigonometric Functions',
									items: [
										docsClassCat('sin', 'std/math/mathematical_functions/sin', '', [],),
										docsClassCat('cos', 'std/math/mathematical_functions/cos', '', [],),
										docsClassCat('tan', 'std/math/mathematical_functions/tan', '', [],),
										docsClassCat('asin', 'std/math/mathematical_functions/asin', '', [],),
										docsClassCat('acos', 'std/math/mathematical_functions/acos', '', [],),
										docsClassCat('atan', 'std/math/mathematical_functions/atan', '', [],),
										docsClassCat('atan2', 'std/math/mathematical_functions/atan2', '', [],),
								]},

								{
									type: 'category',
									label: 'Hyperbolic Functions',
									items: [
										docsClassCat('sinh', 'std/math/mathematical_functions/sinh', '', [],),   // KaTeX needed to doccumment the return values
										docsClassCat('cosh', 'std/math/mathematical_functions/cosh', '', [],),   // KaTeX needed to doccumment the return values
										docsClassCat('tanh', 'std/math/mathematical_functions/tanh', '', [],),   // KaTeX needed to doccumment the return values
										docsClassCat('asinh', 'std/math/mathematical_functions/asinh', '', [],),
										docsClassCat('acosh', 'std/math/mathematical_functions/acosh', '', [],),
										docsClassCat('atanh', 'std/math/mathematical_functions/atanh', '', [],), 
								]},

								{
									type: 'category',
									label: 'Error and Gamma Functions',
									items: [
										docsClassCat('erf', 'std/math/mathematical_functions/erf', '', [],),   // KaTeX needed to doccumment the return values
										docsClassCat('erfc', 'std/math/mathematical_functions/erfc', '', [],),   // KaTeX needed to doccumment the return values
										docsClassCat('tgamma', 'std/math/mathematical_functions/tgamma', '', [],),   // KaTeX needed to doccumment the return values
										docsClassCat('lgamma', 'std/math/mathematical_functions/lgamma', '', [],),   // KaTeX needed to doccumment the return values
								]},

								{
									type: 'category',
									label : 'Nearest integer floating point operations',
									items: [
										docsClassCat('ciel', 'std/math/mathematical_functions/ciel', '', [],),
										docsClassCat('floor', 'std/math/mathematical_functions/floor', '', [],),
										docsClassCat('trunc', 'std/math/mathematical_functions/trunc', '', [],),
										docsClassCat('round', 'std/math/mathematical_functions/round', '', [],),
										docsClassCat('nearbyint', 'std/math/mathematical_functions/nearbyint', '', [],),
										docsClassCat('rint', 'std/math/mathematical_functions/rint', '', [],),
								]},
								

								{
									type: 'category',
									label : 'Floating point manipulation functions',
									items: [
										docsClassCat('ldexp', 'std/math/mathematical_functions/ldexp', '', [],),
										docsClassCat('scalbn', 'std/math/mathematical_functions/scalbn', '', [],),
										docsClassCat('ilogb', 'std/math/mathematical_functions/ilogb', '', [],),
										docsClassCat('logb', 'std/math/mathematical_functions/logb', '', [],),
										docsClassCat('frexp', 'std/math/mathematical_functions/frexp', '', [],),
										docsClassCat('modf', 'std/math/mathematical_functions/modf', '', [],),
										docsClassCat('nextafter', 'std/math/mathematical_functions/nextafter', '', [],),
										docsClassCat('copysign', 'std/math/mathematical_functions/copysign', '', [],),
								]},

								{
									type: 'category',
									label: 'Classification and comparison',
									items: [
										docsClassCat('fpclassify', 'std/math/mathematical_functions/fpclassify', '', [],),
										docsClassCat('isfinite', 'std/math/mathematical_functions/isfinite', '', [],),
										docsClassCat('isinf', 'std/math/mathematical_functions/isinf', '', [],),
										docsClassCat('isnan', 'std/math/mathematical_functions/isnan', '', [],),
										docsClassCat('isnormal', 'std/math/mathematical_functions/isnormal', '', [],),
										docsClassCat('signbit', 'std/math/mathematical_functions/signbit', '', [],),
										docsClassCat('isgreater', 'std/math/mathematical_functions/isgreater', '', [],),
										docsClassCat('isgreaterequal', 'std/math/mathematical_functions/isgreaterequal', '', [],),
										docsClassCat('isless', 'std/math/mathematical_functions/isless', '', [],),
										docsClassCat('islessequal', 'std/math/mathematical_functions/islessequal', '', [],),
										docsClassCat('islessgreater', 'std/math/mathematical_functions/islessgreater', '', [],),
										docsClassCat('isunordered', 'std/math/mathematical_functions/isunordered', '', [],),
								]},

								{
									type: 'category',
									label: 'Types',
									items: [
										docsClassCat('div_t', 'std/math/mathematical_functions/div_t', '', [],),
										docsClassCat('ldiv_t', 'std/math/mathematical_functions/ldiv_t', '', [],), 
										docsClassCat('lldiv_t', 'std/math/mathematical_functions/lldiv_t', '', [],),
										docsClassCat('imaxdiv_t', 'std/math/mathematical_functions/imaxdiv_t', '', [],),
										docsClassCat('float_t', 'std/math/mathematical_functions/float_t', '', [],),
										docsClassCat('double_t', 'std/math/mathematical_functions/float_t', '', [],),

								]},


								{
									type: 'category',
									label: 'Macro Constants',
									items: [
										docsClassCat('HUGE_VALF', 'std/math/mathematical_functions/huge_valf', '', [],),
										docsClassCat('INFINITY', 'std/math/mathematical_functions/infinity', '', [],), 
										docsClassCat('NAN', 'std/math/mathematical_functions/nan', '', [],),
										docsClassCat('MATH_ERRNO', 'std/math/mathematical_functions/errno', '', [],),

								]},

								docsClassCat('FP_ Categories', 'std/math/mathematical_functions/fp_category', '', [],),
								
								
							],
						},
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
								docsClassCat('initializer_list', 'std/containers/arrays/initializer_list', 'since-cpp11', [
										'constructor',
										cat('Capacity'),
										'm:size',
										cat('Iterators'),
										'm:begin',
										'm:end',
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
								docsClassCat('string', 'std/containers/strings/string', '', [
									'constructors',
									'op:operator_assign',
									'm:assign',
									'm:get_allocator',
									cat('Element access'),
									'm:at',
									'op:operator_subscript',
									[ 'm:front', 'since-cpp11' ],
									[ 'm:back', 'since-cpp11' ],
									'm:data',
									'm:c_str',
									[ 'op:operator_string_view', 'since-cpp23' ],
									cat('Iterators'),
									[ 'op:begin', 'since-cpp11' ],
									[ 'op:end', 'since-cpp11' ],
									[ 'op:rbegin', 'since-cpp11' ],
									[ 'op:rend', 'since-cpp11' ],
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									'm:reserve',
									'm:capacity',
									[ 'shrink_to_fit', 'since-cpp11' ],
									cat('Operations'),
									'm:clear',
									'm:insert',
									'm:erase',
									'm:push_back',
									[ 'm:pop_back', 'since-cpp11' ],
									'm:append',
									'op:operator_addeq',
									'm:compare',
									[ 'm:starts_with', 'since-cpp20' ],
									[ 'm:ends_with', 'since-cpp20' ],
									[ 'm:contains', 'since-cpp23' ],
									'm:replace',
									'm:substr',
									'm:copy',
									'm:resize',
									[ 'm:resize_and_overwrite', 'since-cpp23' ],
									'm:swap',
									cat('Search'),
									'm:find',
									'm:rfind',
									'm:find_first_of',
									'm:find_first_not_of',
									'm:find_last_of',
									'm:find_last_not_of',
								]),
								docsClassCat('string_view', 'std/containers/strings/string_view', '', [
									'constructors',
									'op:operator_assign',
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
									cat('Modifiers'),
									'm:remove_prefix',
									'm:remove_suffix',
									'm:swap',
									cat('Operations'),
									'm:copy',
									'm:substr',
									'm:compare',
									[ 'm:starts_with', 'since-cpp20'],
									[ 'm:ends_with', 'since-cpp20'],
									[ 'm:compare', 'since-cpp23'],
									'm:find',
									'm:rfind',
									'm:find_first_of',
									'm:find_first_not_of',
									'm:find_last_of',
									'm:find_last_not_of'
								]),
							]
						},
						{
							type: 'category',
							label: 'Queues',
							link: { type: 'doc', id: 'std/containers/queues/index' },
							items: [
								docsClassCat('queue', 'std/containers/queues/queue', '', [
									'constructors',
									'destructors',
									'op:operator_assign',
									cat('Element access'),
									'm:front',
									'm:back',
									cat('Capacity'),
									'm:empty',
									'm:size',
									cat('Modifiers'),
									'm:push',
									'm:pop',
									['m:emplace', 'since-cpp11'],
									['m:swap', 'since-cpp11'],
								]),
								docsClassCat('deque', 'std/containers/queues/deque', '', [
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
									cat('Iterators'),
									['m:begin', 'since-cpp11'],
									['m:end', 'since-cpp11'],
									['m:rbegin', 'since-cpp11'],
									['m:rend', 'since-cpp11'],
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									['m:shrink_to_fit', 'since-cpp11'],
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									['m:emplace', 'since-cpp11'],
									'm:erase',
									'm:push_back',
									['m:emplace_back', 'since-cpp11'],
									'm:pop_back',
									'm:push_front',
									['m:emplace_front', 'since-cpp11'],
									'm:pop_front',
									'm:resize',
									'm:swap'
								]),
								docsClass('std/containers/queues/priority-queue'),
							]
						},
						{
							type: 'category',
							label: 'Maps and dictionaries',
							link: { type: 'doc', id: 'std/containers/maps/index' },
							items: [
								docsClassCat('map', 'std/containers/maps/map', '', [
									'constructors',
									'destructor',
									'op:operator_assign',
									'm:get_allocator',
									cat('Element acccess'),
									'm:at',
									'op:operator_subscript',
									cat('Iterators'),
									['m:begin', 'since-cpp11'],
									['m:end', 'since-cpp11'],
									['m:rbegin', 'since-cpp11'],
									['m:rend', 'since-cpp11'],
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									['m:insert_or_assign', 'since-cpp17'],
									['m:emplace', 'since-cpp11'],
									['m:emplace_hint', 'since-cpp11'],
									['m:try_emplace', 'since-cpp17'],
									'm:erase',
									'm:swap',
									['m:extract', 'since-cpp17'],
									['m:merge', 'since-cpp17'],
									cat('Lookup'),
									'm:count',
									'm:find',
									['m:contains', 'since-cpp20'],
									'm:equal_range',
									'm:lower_bound',
									'm:upper_bound',
									cat('Observers'),
									'm:key_comp',
									'm:value_comp',
									'm:value_compare',

								]),
								docsClassCat('multimap', 'std/containers/maps/multimap', '', [
									'constructors',
									'destructor',
									'op:operator_assign',
									'm:get_allocator',
									cat('Iterators'),
									['m:begin', 'since-cpp11'],
									['m:end', 'since-cpp11'],
									['m:rbegin', 'since-cpp11'],
									['m:rend', 'since-cpp11'],
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									['m:emplace', 'since-cpp11'],
									['m:emplace_hint', 'since-cpp11'],
									'm:erase',
									'm:swap',
									['m:extract', 'since-cpp17'],
									['m:merge', 'since-cpp17'],
									cat('Lookup'),
									'm:count',
									'm:find',
									['m:contains', 'since-cpp20'],
									'm:equal_range',
									'm:lower_bound',
									'm:upper_bound',
									cat('Observers'),
									'm:key_comp',
									'm:value_comp',
								]),
								docsClassCat('unordered_map', 'std/containers/maps/unordered-map', '', [
									'constructors',
									'destructors',
									'op:operator_assign',
									'm:get_allocator',
									cat('Element access'),
									'm:at',
									'op:operator_subscript',
									cat('Iterators'),
									'm:begin',
									'm:end',
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									['m:insert_or_assign', 'since-cpp17'],
									'm:emplace',
									'm:emplace_hint',
									['m:try_emplace', 'since-cpp17'],
									'm:erase',
									'm:swap',
									['m:extract', 'since-cpp17'],
									['m:merge', 'since-cpp17'],
									cat('Lookup'),
									'm:count',
									'm:find',
									['m:contains', 'since-cpp20'],
									'm:equal_range',
									cat('Bucket interface'),
									'm:begin_size_type',
									'm:end_size_type',
									'm:bucket_count',
									'm:max_bucket_count',
									'm:bucket_size',
									'm:bucket',
									cat('Hash policy'),
									'm:load_factor',
									'm:max_load_factor',
									'm:rehash',
									'm:reserve',
									cat('Observers'),
									'm:hash_function',
									'm:key_eq'
								]),
								docsClassCat('unordered_multimap', 'std/containers/maps/unordered-multimap', '', [
									'constructors',
									'destructors',
									'op:operator_assign',
									'm:get_allocator',
									cat('Iterators'),
									'm:begin',
									'm:end',
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									'm:emplace',
									'm:emplace_hint',
									'm:erase',
									'm:swap',
									['m:extract', 'since-cpp17'],
									['m:merge', 'since-cpp17'],
									cat('Lookup'),
									'm:count',
									'm:find',
									'm:contains',
									'm:equal_range',
									cat('Bucket interface'),
									'm:begin_size_type',
									'm:end_size_type',
									'm:bucket_count',
									'm:max_bucket_count',
									'm:bucket_size',
									'm:bucket',
									cat('Hash policy'),
									'm:load_factor',
									'm:max_load_factor',
									'm:rehash',
									'm:reserve',
									cat('Observers'),
									'm:hash_function',
									'm:key_eq'
								])
							]
						},
						{
							type: 'category',
							label: 'Sets',
							link: { type: 'doc', id: 'std/containers/sets/index' },
							items: [
								docsClassCat('set', 'std/containers/sets/set', '', [
									'constructors',
									'destructors',
									'op:operator_assign',
									'm:get_allocator',
									cat('Iterators'),
									['m:begin', 'since-cpp11'],
									['m:end', 'since-cpp11'],
									['m:rbegin', 'since-cpp11'],
									['m:rend', 'since-cpp11'],
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									['m:emplace', 'since-cpp11'],
									['m:emplace_hint', 'since-cpp11'],
									'm:erase',
									'm:swap',
									['m:extract', 'since-cpp17'],
									['m:merge', 'since-cpp17'],
									cat('Lookup'),
									'm:count',
									'm:find',
									['m:contains', 'since-cpp20'],
									'm:equal_range',
									'm:lower_bound',
									'm:upper_bound',
									cat('Observers'),
									'm:key_comp',
									'm:value_comp',
								]),
								docsClassCat('unordered_set', 'std/containers/sets/unordered-set', '', [
									'constructors',
									'destructors',
									'op:operator_assign',
									'm:get_allocator',
									cat('Iterators'),
									'm:begin',
									'm:end',
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									['m:emplace', 'since-cpp11'],
									['m:emplace_hint', 'since-cpp11'],
									'm:erase',
									'm:swap',
									['m:extract', 'since-cpp17'],
									['m:merge', 'since-cpp17'],
									cat('Lookup'),
									'm:count',
									'm:find',
									['m:contains', 'since-cpp20'],
									'm:equal_range',
									cat('Bucket interface'),
									'm:begin_size_type',
									'm:end_size_type',
									'm:bucket_count',
									'm:max_bucket_count',
									'm:bucket_size',
									'm:bucket',
									cat('Hash policy'),
									'm:load_factor',
									'm:max_load_factor',
									'm:rehash',
									'm:reserve',
									cat('Observers'),
									'm:hash_function',
									'm:key_eq',
								]),
								docsClassCat('multiset', 'std/containers/sets/multiset', '', [
									'constructors',
									'destructors',
									'op:operator_assign',
									'm:get_allocator',
									cat('Iterators'),
									['m:begin', 'since-cpp11'],
									['m:end', 'since-cpp11'],
									['m:rbegin', 'since-cpp11'],
									['m:rend', 'since-cpp11'],
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									['m:emplace', 'since-cpp11'],
									['m:emplace_hint', 'since-cpp11'],
									'm:erase',
									'm:swap',
									['m:extract', 'since-cpp17'],
									['m:merge', 'since-cpp17'],
									cat('Lookup'),
									'm:count',
									'm:find',
									['m:contains', 'since-cpp20'],
									'm:equal_range',
									'm:lower_bound',
									'm:upper_bound',
									cat('Observers'),
									'm:key_comp',
									'm:value_comp',
								]),
								docsClassCat('unordered_multiset', 'std/containers/sets/unordered-multiset', '', [
									'constructors',
									'destructors',
									'op:operator_assign',
									'm:get_allocator',
									cat('Iterators'),
									['m:begin', 'since-cpp11'],
									['m:end', 'since-cpp11'],
									cat('Capacity'),
									'm:empty',
									'm:size',
									'm:max_size',
									cat('Modifiers'),
									'm:clear',
									'm:insert',
									'm:emplace',
									'm:emplace_hint',
									'm:erase',
									'm:swap',
									['m:extract', 'since-cpp17'],
									['m:merge', 'since-cpp17'],
									cat('Lookup'),
									'm:count',
									'm:find',
									['m:contains', 'since-cpp20'],
									'm:equal_range',
									cat('Bucket interface'),
									'm:begin_size_type',
									'm:end_size_type',
									'm:bucket_count',
									'm:max_bucket_count',
									'm:bucket_size',
									'm:bucket',
									cat('Hash policy'),
									'm:load_factor',
									'm:max_load_factor',
									'm:rehash',
									'm:reserve',
									cat('Obervers'),
									'm:hash_function',
									'm:key_eq',
								])

							]
						},
						{
							type: 'category',
							label: 'Lists',
							link: { type: 'doc', id: 'std/containers/lists/index' },
							items: [
								docsClassCat('forward-list', 'std/containers/lists/forward-list', '', [
									'constructors',
									'destructor',
									'op:operator_assign',
									'm:assign',
									'm:get_allocator',
									cat('Element access'),
									'm:front',
									cat('Iterators'),
									'm:before_begin',
									'm:begin',
									'm:end',
									cat('Capacity'),
									'm:empty',
									'm:max_size',
									cat('Modifiers'),
									'm:clear',
									'm:insert_after',
									'm:emplace_after',
									'm:erase_after',
									'm:push_front',
									'm:emplace_front',
									'm:pop_front',
									'm:resize',
									'm:swap',
									cat('Operations'),
									'm:merge',
									'm:splice_after',
									'm:remove',
									'm:reverse',
									'm:unique',
									'm:sort',
								]),
							]
						},
						{
							type: 'category',
							label: 'Other',
							link: { type: 'doc', id: 'std/containers/other/index' },
							items: [
								docsClassCat('span', 'std/containers/other/span', '', [
									'constructors',
									'op:operator_assign',
									cat('Element access'),
									'm:front',
									'm:back',
									'op:operator_subscript',
									'm:data',
									cat('Iterators'),
									'm:begin',
									'm:end',
									'm:rbegin',
									'm:rend',
									cat('Observers'),
									'm:size',
									'm:size_bytes',
									'm:empty',
									cat('Subviews'),
									'm:first',
									'm:last',
									'm:subspan',
								]),
								docsClassCat('stack', 'std/containers/other/stack', '', [
									'constructors',
									'destructors',
									'op:operator_assign',
									cat('Element access'),
									'm:top',
									cat('Capacity'),
									'm:empty',
									'm:size',
									cat('Modifiers'),
									'm:push',
									['m:emplace', 'since-cpp11'],
									'm:pop',
									['m:swap', 'since-cpp11'],
								]),
							]
						}
					]
				},
				{
					type: 'category',
					label: 'Algorithms',
					link: { type: 'doc', id: 'std/algo/index' },
					items: [
						{
							type: 'category',
							label: 'Non-modifying',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/algo/ranges/count', 'since-cpp20'),
										docsMethod('std/algo/ranges/count_if', 'since-cpp20'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/algo/ordinary/count'),
										docsMethod('std/algo/ordinary/count_if'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Modifying',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/algo/ranges/transform', 'since-cpp20'),
										docsMethod('std/algo/ranges/reverse', 'since-cpp20'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/algo/ordinary/transform'),
										docsMethod('std/algo/ordinary/reverse'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Partitioning',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Sorting',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/algo/ranges/sort', 'since-cpp20'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/algo/ordinary/sort'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Binary search',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Other operations on sorted ranges',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Set',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Heap',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Min/max',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/algo/ranges/min', 'since-cpp20'),
										docsMethod('std/algo/ranges/max', 'since-cpp20'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/algo/ordinary/min'),
										docsMethod('std/algo/ordinary/max'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Comparison',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Permutation',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Numeric',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'Operations on uninitialized memory',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						},
						{
							type: 'category',
							label: 'C algorithms',
							items: [
								{
									type: 'category',
									label: 'Rangified',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								},
								{
									type: 'category',
									label: 'Ordinary',
									items: [
										docsMethod('std/utility/forward', 'since-cpp11'),
									]
								}
							]
						}
					]
				},
				{
					type: 'category',
					label: 'Utility',
					items: [
						docsMethod('std/utility/forward', 'since-cpp11'),
						docsMethod('std/utility/variant', 'since-cpp17'),
					]
				},
			],
		},
		{
			type: 'category',
			label: 'Named Requirements',
			collapsed: true,
			link: { type: 'doc', id: 'named_req/named_req' },
			items: [
				{
					type: 'category',
					label: 'Basic',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('DefaultConstructible', 'named_req/DefaultConstructible', '', []),
						docsClassCat('MoveConstructible', 	 'named_req/MoveConstructible', '', []),
						docsClassCat('CopyConstructible', 	 'named_req/CopyConstructible', '', []),
						docsClassCat('MoveAssignable', 		 'named_req/MoveAssignable', '', []),
						docsClassCat('CopyAssignable', 		 'named_req/CopyAssignable', '', []),
						docsClassCat('Destructible', 		 'named_req/Destructible', '', []),
					],
				},
				{
					type: 'category',
					label: 'Type properties',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('ScalarType', 			 'named_req/ScalarType', '', []),
						docsClassCat('PODType', 	         'named_req/PODType', '', []),
						docsClassCat('TriviallyCopyable', 	 'named_req/TriviallyCopyable', '', []),
						docsClassCat('TrivialType', 		 'named_req/TrivialType', '', []),
						docsClassCat('StandardLayoutType', 	 'named_req/StandardLayoutType', '', []),
						docsClassCat('ImplicitLifetimeType', 'named_req/ImplicitLifetimeType', '', []),
					],
				},
				{
					type: 'category',
					label: 'Library-wide',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('EqualityComparable', 'named_req/EqualityComparable', '', []),
						docsClassCat('LessThanComparable', 'named_req/LessThanComparable', '', []),
						docsClassCat('Swappable', 		   'named_req/Swappable', '', []),
						docsClassCat('ValueSwappable', 	   'named_req/ValueSwappable', '', []),
						docsClassCat('NullablePointer',    'named_req/NullablePointer', '', []),
						docsClassCat('Hash', 			   'named_req/Hash', '', []),
						docsClassCat('Allocator', 		   'named_req/Allocator', '', []),
						docsClassCat('FunctionObject', 	   'named_req/FunctionObject', '', []),
						docsClassCat('Callable', 		   'named_req/Callable', '', []),
						docsClassCat('Predicate', 		   'named_req/Predicate', '', []),
						docsClassCat('BinaryPredicate',    'named_req/BinaryPredicate', '', []),
						docsClassCat('Compare', 		   'named_req/Compare', '', []),
						
					],
				},
				{
					type: 'category',
					label: 'Container',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('Container', 			 		  'named_req/Container', '', []),
						docsClassCat('ReversibleContainer', 		  'named_req/ReversibleContainer', '', []),
						docsClassCat('AllocatorAwareContainer', 	  'named_req/AllocatorAwareContainer', '', []),
						docsClassCat('SequenceContainer', 			  'named_req/SequenceContainer', '', []),
						docsClassCat('ContiguousContainer', 		  'named_req/ContiguousContainer', '', []),
						docsClassCat('AssociativeContainer', 		  'named_req/AssociativeContainer', '', []),
						docsClassCat('UnorderedAssociativeContainer', 'named_req/UnorderedAssociativeContainer', '', []),
						
						{
							type: 'category',
							label: 'Container element',
							collapsed: false,
							link: { type: 'doc', id: 'named_req/named_req' },
							items: [
								docsClassCat('DefaultInsertable', 	 'named_req/DefaultInsertable', '', []),
								docsClassCat('CopyInsertable', 		 'named_req/CopyInsertable', '', []),
								docsClassCat('MoveInsertable', 		 'named_req/MoveInsertable', '', []),
								docsClassCat('EmplaceConstructible', 'named_req/EmplaceConstructible', '', []),
								docsClassCat('Erasable', 			 'named_req/Erasable', '', []),
						
							],
						},
					],
				},
				{
					type: 'category',
					label: 'Iterator',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('LegacyIterator', 			    'named_req/LegacyIterator', '', []),
						docsClassCat('LegacyInputIterator', 		'named_req/LegacyInputIterator', '', []),
						docsClassCat('LegacyOutputIterator', 		'named_req/LegacyOutputIterator', '', []),
						docsClassCat('LegacyForwardIterator', 		'named_req/LegacyForwardIterator', '', []),
						docsClassCat('LegacyBidirectionalIterator', 'named_req/LegacyBidirectionalIterator', '', []),
						docsClassCat('LegacyRandomAccessIterator', 	'named_req/LegacyRandomAccessIterator', '', []),
						docsClassCat('LegacyContiguousIterator', 	'named_req/LegacyContiguousIterator', '', []),
						docsClassCat('ConstexprIterator', 			'named_req/ConstexprIterator', '', []),
						
					],
				},
				{
					type: 'category',
					label: 'Stream I/O functions',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('UnformattedInputFunction',  'named_req/UnformattedInputFunction', '', []),
						docsClassCat('FormattedInputFunction', 	  'named_req/FormattedInputFunction', '', []),
						docsClassCat('UnformattedOutputFunction', 'named_req/UnformattedOutputFunction', '', []),
						docsClassCat('FormattedOutputFunction',   'named_req/FormattedOutputFunction', '', []),
						
					],
				},
				{
					type: 'category',
					label: 'Formatters',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('BasicFormatter', 'named_req/BasicFormatter', '', []),
						docsClassCat('Formatter', 	   'named_req/Formatter', '', []),
					],
				},
				{
					type: 'category',
					label: 'Random Number Generation',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('SeedSequence', 			  'named_req/SeedSequence', '', []),
						docsClassCat('UniformRandomBitGenerator', 'named_req/UniformRandomBitGenerator', '', []),
						docsClassCat('RandomNumberEngine', 		  'named_req/RandomNumberEngine', '', []),
						docsClassCat('RandomNumberEngineAdaptor', 'named_req/RandomNumberEngineAdaptor', '', []),
						docsClassCat('RandomNumberDistribution',  'named_req/RandomNumberDistribution', '', []),
						
					],
				},
				{
					type: 'category',
					label: 'Concurrency',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('BasicLockable', 		'named_req/BasicLockable', '', []),
						docsClassCat('Lockable', 			'named_req/Lockable', '', []),
						docsClassCat('TimedLockable', 		'named_req/TimedLockable', '', []),
						docsClassCat('SharedLockable', 		'named_req/SharedLockable', '', []),
						docsClassCat('SharedTimedLockable', 'named_req/SharedTimedLockable', '', []),
						docsClassCat('Mutex', 			 	'named_req/Mutex', '', []),
						docsClassCat('TimedMutex', 			'named_req/TimedMutex', '', []),
						docsClassCat('SharedMutex', 		'named_req/SharedMutex', '', []),
						docsClassCat('SharedTimedMutex', 	'named_req/SharedTimedMutex', '', []),
						
					],
				},
				{
					type: 'category',
					label: 'Ranges',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('RangeAdaptorObject', 		  'named_req/RangeAdaptorObject', '', []),
						docsClassCat('RangeAdaptorClosureObject', 'named_req/RangeAdaptorClosureObject', '', []),
						
					],
				},
				{
					type: 'category',
					label: 'Other',
					collapsed: true,
					link: { type: 'doc', id: 'named_req/named_req' },
					items: [
						docsClassCat('UnaryTypeTrait', 		'named_req/UnaryTypeTrait', '', []),
						docsClassCat('BinaryTypeTrait', 	'named_req/BinaryTypeTrait', '', []),
						docsClassCat('TransformationTrait', 'named_req/TransformationTrait', '', []),
						docsClassCat('Clock', 			 	'named_req/Clock', '', []),
						docsClassCat('TrivialClock', 		'named_req/TrivialClock', '', []),
						docsClassCat('CharTraits', 			'named_req/CharTraits', '', []),
						docsClassCat('BitmaskType', 		'named_req/BitmaskType', '', []),
						docsClassCat('NumericType', 		'named_req/NumericType', '', []),
						docsClassCat('RegexTraits', 		'named_req/RegexTraits', '', []),
						docsClassCat('LiteralType', 		'named_req/LiteralType', '', []),
						
					],
				},
			],
		},
    {
		  type: 'category',
			label: 'Allocators',
			collapsed: true,
			items: [
				   docsClassCat('allocator', 'std/memory/allocator', '', []),
				   docsClassCat('allocator_traits', 'std/memory/allocator_traits', '', []),							
				   docsClassCat('allocation_result', 'std/memory/allocation_result', '', []),
						docsClassCat('allocator_arg', 'std/memory/allocator_arg', '', []),	
						docsClassCat('uses_allocator', 'std/memory/uses_allocator', '', []),
						docsClassCat('uses_allocator_construction_args', 'std/memory/uses_allocator_construction_args', '', []),							
						docsClassCat('make_obj_using_allocator', 'std/memory/make_obj_using_allocator', '', []),
						docsClassCat('uninitialized_construct_using_allocator', 'std/memory/uninitialized_construct_using_allocator', '', []),
						docsClassCat('scoped_allocator_adaptor', 'std/memory/scoped_allocator_adaptor', '', []),
						docsClassCat('polymorphyc_allocator', 'std/memory/polymorphyc_allocator', '', []),	
			],
		},
    {
      type: 'category',
      label: 'Memory Management Library',
			collapsed: false,
			link: { type: 'doc', id: 'std/memory/memory_management_index' },
			items: [
				{
				type: 'category',
				label: 'Smart Pointers',
				collapsed: true,
					items: [
						{
						type: 'category',
						label: 'Pointer Categories',
						collapsed: false,
						items: [
							docsClassCat('unique_ptr', 'std/memory/unique_ptr', '', []),
							docsClassCat('shared_ptr', 'std/memory/shared_ptr', '', []),							
							docsClassCat('weak_ptr', 'std/memory/weak_ptr', '', []),
							docsClassCat('auto_ptr', 'std/memory/auto_ptr', '', []),
							],					
						},
						{
							type: 'category',
							label: 'Helper classes',
							collapsed: false,
							items: [
								{
									type: 'category',
									label: 'owner_less',
									collapsed: true,
									link: { type: 'doc', id: 'std/memory/owner_less' },
									items: [
										docsClassCat('owner_less_void', 'std/memory/owner_less_void', '', []),
										],					
								},
								docsClassCat('enable_shared_from_this', 'std/memory/enable_shared_from_this', '', []),							
								docsClassCat('bad_weak_ptr', 'std/memory/bad_weak_ptr', '', []),
								docsClassCat('default_delete', 'std/memory/default_delete', '', []),
								],					
						},
						{
							type: 'category',
							label: 'Smart pointer adaptors',
							collapsed: false,
							items: [
								docsClassCat('out_ptr_t', 'std/memory/out_ptr_t', '', []),
								docsClassCat('out_ptr', 'std/memory/out_ptr', '', []),							
								docsClassCat('inout_ptr_t', 'std/memory/inout_ptr_t', '', []),
								docsClassCat('inout_ptr', 'std/memory/inout_ptr', '', []),
				      ],
            },
          ]
        }
      ]
    }
	],
};
