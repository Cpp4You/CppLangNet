import React from 'react';

import styles from '@site/src/css/components/Columns.module.scss'

export default function Columns(props) {

	const style = props.style || {};

	style.display = "grid";
	
	style.gridGap = props.spacing || 20;
	

	if (!props.columns)
		style.gridTemplateColumns = `repeat(${props.columns || 2}, 1fr)`;
	else
	{
		style.gridTemplateColumns = props.columns.map(e => `${e}`).join(" ");
	}

	const divProps = { ...props };
	delete divProps.columns;
	delete divProps.spacing;

	return (
		<div className={styles.columns} {...divProps} style={style}>
			{props.children}
		</div>
	);
}

Columns.isMDXComponent = true;