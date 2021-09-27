import React from 'react';

import styles from '@site/src/css/components/Columns.module.scss'

export default function Columns(props) {

	const style = props.style || {};

	style.display = "grid";
	
	if (props.spacing)
		style.gridGap = props.spacing;

	if (!props.columns)
		style.gridTemplateColumns = `repeat(${props.columns || 2}, 1fr)`;
	else
	{
		style.gridTemplateColumns = props.columns.map(e => `${e}`).join(" ");
	}

	return (
		<div className={styles.columns} {...props} style={style}>
			{props.children}
		</div>
	);
}

Columns.isMDXComponent = true;