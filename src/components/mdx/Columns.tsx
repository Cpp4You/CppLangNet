import React from "react";

import styles from "./Columns.module.scss";

type ColumsProps = {
	children: React.ReactNode;
	style: React.CSSProperties;
	spacing?: number;
	columns?: number[];
}

export default function Columns(props: ColumsProps)
{
	const style = props.style || {};

	style.rowGap = props.spacing || 20;	
	style.columnGap = props.spacing || 20;	

	if (!props.columns)
		style.gridTemplateColumns = "repeat(2, 1fr)";
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