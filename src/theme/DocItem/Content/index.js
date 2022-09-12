import React from 'react';
import Content from '@theme-original/DocItem/Content';
import {useDoc} from '@docusaurus/theme-common/internal';

import CppRefAttribution from '@site-comps/CppRefAttribution';

export default function ContentWrapper(props) {
	const {metadata} = useDoc();
	return (
		<>
			<Content {...props} />
			{(metadata.frontMatter["cppreference_origin"] !== undefined &&
				<CppRefAttribution fullUrl={metadata.frontMatter["cppreference_origin"]}/>)
				||
			(metadata.frontMatter["cppreference_origin_rel"] !== undefined &&				
				<CppRefAttribution lang="en" relativeUrl={metadata.frontMatter["cppreference_origin_rel"]}/>)
			}
		</>
	);
}
