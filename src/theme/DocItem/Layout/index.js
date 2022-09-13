import React					from 'react';
import Layout					from '@theme-original/DocItem/Layout';

import DocSettings				from '@site/src/components/DocSettings';
import { setCookie, getCookie }	from '@site/src/helper/Cookies';

import styles					from './Layout.module.scss';


export default function LayoutWrapper(props) {

	return (
		<div className={"document-layout-wrapper"}>
			<Layout {...props} />
		</div>
	);
}
