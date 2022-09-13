import React	from 'react';
import Layout	from '@theme-original/DocItem/Layout';
import styles	from './Layout.module.scss';

export default function LayoutWrapper(props) {

	return (
		<div className={"document-layout-wrapper " + styles.layoutWrapper}>
			<Layout {...props} />
		</div>
	);
}
