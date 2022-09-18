import React from "react";

import Tooltip from "./Tooltip";
import styles from "./CppRefAttribution.module.scss";


type CppRefAttribution = {
	fullUrl: string;
	relativeUrl: string;
	lang: string;
}

export function CppRefAttribution({ fullUrl = "", relativeUrl = "", lang="en" }: CppRefAttribution)
{
	const url = fullUrl ? fullUrl : `https://${lang}.cppreference.com/${relativeUrl || ""}`;

	return (
		<div className={styles.container}>
			This article originates from <a href={url} target="_blank" rel="noreferrer">this CppReference page</a>.
			It was likely altered for improvements or editors&apos; preference. Click &quot;Edit this page&quot; to see all
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