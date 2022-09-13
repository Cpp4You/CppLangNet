import React					from 'react';
import Content					from '@theme-original/DocItem/Content';
import DocSettings				from '@site/src/components/DocSettings';
import CppRefAttribution		from '@site-comps/CppRefAttribution';

import BrowserOnly				from '@docusaurus/BrowserOnly';
// import useIsBrowser				from '@docusaurus/useIsBrowser';
import { useDoc }				from '@docusaurus/theme-common/internal';
import { setCookie, getCookie }	from '@site/src/helper/Cookies';

import styles					from './Content.module.scss';

export default function ContentWrapper(props) {
	const {metadata}	= useDoc();
	// const isBrowser		= useIsBrowser();
	// const customMetadata = metadata.frontMatter;

	const [textSize, setTextSize] = React.useState(3);
	React.useEffect(() => {
		setTextSize(Number.parseInt(getCookie('sizeMode')));
	}, []);

	const handleTextSizeChanged = React.useCallback(
		(newSize) => {
			setTextSize(newSize);
			setCookie('sizeMode', newSize, 180);
		},
		[textSize]
	);


	return (
		<div className={"document-content-wrapper " + styles[`sizeMode-${textSize}`]}>
			<BrowserOnly>
				{() => <DocSettings onTextSizeChanged={handleTextSizeChanged}/>}
			</BrowserOnly>
			<Content {...props} />
			{(metadata.frontMatter["cppreference_origin"] !== undefined &&
				<CppRefAttribution fullUrl={metadata.frontMatter["cppreference_origin"]}/>)
				||
			(metadata.frontMatter["cppreference_origin_rel"] !== undefined &&				
				<CppRefAttribution lang="en" relativeUrl={metadata.frontMatter["cppreference_origin_rel"]}/>)
			}
		</div>
	);
}
