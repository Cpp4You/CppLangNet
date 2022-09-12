import React from 'react';

import Tooltip from '@site-comps/Tooltip';
import styles from '../../css/components/CppRefAttribution.module.scss';


export const CppRefAttribution = ({ fullUrl = "", relativeUrl = "", lang="en" }) =>
{
	const url = fullUrl ? fullUrl : `https://${lang}.cppreference.com/${relativeUrl || ""}`;

	return (
		<div className={styles.container}>
			This article originates from <a href={url} target="_blank">this CppReference page</a>.
			It was likely altered for improvements or editors' preference. Click "Edit this page" to see all
			changes made to this document.
			<br/>
			<span className={styles.licenseTooltip}>
				<Tooltip title={
					<>
						© cppreference.com<br/>
						Licensed under the Creative Commons Attribution-ShareAlike Unported License v3.0.
					</>
				}>Hover to see the original license.</Tooltip>
			</span>
		</div>
	);
}

CppRefAttribution.isMDXComponent = true;

export default CppRefAttribution;