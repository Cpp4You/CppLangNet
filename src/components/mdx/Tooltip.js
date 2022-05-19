import React, { useEffect }		from 'react';
import useBaseUrl				from '@docusaurus/useBaseUrl';

import MUITooltip				from '@mui/material/Tooltip';

import transformEmptyTagElem	from "@site/src/helper/TransformEmptyTagElem";
import styles					from '@site/src/css/components/Tooltip.module.scss'

export default function Tooltip({url, title, maxWidth, children}) {
	const MAX_WIDTH = '800px';

	let mw = maxWidth || `clamp(250px, 25vw, ${MAX_WIDTH})`;
	if (typeof mw === "string" && mw.endsWith("vw")) {
		mw = `clamp(250px, ${mw}, ${MAX_WIDTH})`;
	}
	const t = typeof title === "function" ? React.createElement(title) : title;

	const u = (url || "").startsWith("/") ? useBaseUrl(url) : url;
	const wrappedChildren = url ? <a href={u} target="_blank">{children}</a> : children;

	return (
		<MUITooltip componentsProps={{ tooltip: { style: { maxWidth: mw } } }}
					title={<span className={styles.TooltipTitle}>{transformEmptyTagElem(t)}</span>} placement="top"
					arrow
				>
			<span className={styles.TooltipContent}>{wrappedChildren}</span>
		</MUITooltip>
	);
}

Tooltip.isMDXComponent = true;