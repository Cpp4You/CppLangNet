import React from "react";

import transformEmptyTagElem from "@site/src/helper/TransformEmptyTagElem";

import styles from "./SyntaxTable.module.scss";

export default function SyntaxTable(props)
{
	const childrenArray = React.Children.toArray(props.children);

	const displayArray = (arr) => {
		if (arr.length === 0) return null;
		return (
			<table className={styles.syntaxTable}>
				<tbody>
					{arr}
				</tbody>
			</table>
		);
	}

	return (
		displayArray(childrenArray)
	);
}

const Args = ({args}) => (
	<div>{args.map(arg => <td className={styles.argument}>{arg}</td>)}</div>
);

export function Syntax(props) {
	let directive = transformEmptyTagElem(props.directive);

	let args = null;
	if (props.args)
		args = Array.from(props.args);
	else if (props.children)
		args = props.children;

	let id = null;
	if (props.id)
		id = props.id;
	
	return (
		<tr>
			<td className={styles.id}>
				{id}
			</td>
			<td className={styles.directive}>
				{directive}
			</td>
			<td className={styles.args}>
				<Args args={args}/>				
			</td>
		</tr>
	);
};

Syntax.isMDXComponent		= true;
SyntaxTable.isMDXComponent	= true;
SyntaxTable.Syntax = Syntax;