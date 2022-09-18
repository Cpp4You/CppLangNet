import React from "react";

import transformEmptyTagElem from "@site/src/helper/TransformEmptyTagElem";

import styles from "./SymbolTable.module.scss";

import { ClassContext } from "./ClassContext";

export const Access = {
	None: {
		Order:		0,
		ShortName:	"",
		FullName:	"",
		Style:		styles.accessPublic,
	},
	Public: {
		Order:		1,
		ShortName:	"pub",
		FullName:	"public",
		Style:		styles.accessPublic,
	},
	Protected: {
		Order:		2,
		ShortName:	"prot",
		FullName:	"protected",
		Style:		styles.accessProtected,
	},
	Private: {
		Order:		3,
		ShortName:	"priv",
		FullName:	"private",
		Style:		styles.accessPrivate,
	}
};

const readAccess = (props) => {
	if (props.pub	|| props.public)		return Access.Public;
	if (props.prot	|| props.protected)		return Access.Protected;
	if (props.priv	|| props.private)		return Access.Private;
	else
		return Access.None;
};


export default function SymbolTable(props)
{
	const childrenArray = React.Children.toArray(props.children);

	const displayArray = (arr) => {
		if (arr.length === 0) return null;

		const sorted = arr.sort((l, r) => (readAccess(l).Order < readAccess(r).Order));

		return (
			<table data-no-traits={`${props.noTraits || "false"}`} className={styles.symbolTable}>
				<tbody>
					{sorted}
				</tbody>
			</table>
		);
	}

	return (	
		displayArray(childrenArray)
	);
}


export function Symbol(props) {

	const ctx = React.useContext(ClassContext);
	
	let nameElem = transformEmptyTagElem(props.name);

	let desc = null;
	if (props.desc)
		desc = props.desc;
	else if (props.children)
		desc = props.children;
		
	if (props.link || props.autoLink)
		nameElem = <a href={props.link || `${(props.linkName || props.name)}`}>{nameElem}</a>;

	const mapAccess = props => {
		const a = readAccess(props);
		return (<span className={a.Style}>{a.ShortName}</span>);
	}
	const mapModifier = (testValue, style, content) => {
		switch (testValue) {
			case true:	return <span className={styles[style]}>{content}</span>;
			default:	return null;
		}
	}

	const arr = [1, 10, 13, 15];

	return (
		<tr>
			<td className={styles.symbolProp}>
				{mapAccess(props)}
				{mapModifier(props.static,		"modStatic",	"static")}
				{mapModifier(props.constexpr,	"modConstexpr",	"constexpr")}
				{mapModifier(props.const,		"modConst",		"const")}
				{mapModifier(props.volatile,	"modVolatile",	"volatile")}
				{mapModifier(props.virtual,		"modVirtual",	"virtual")}
			</td>
			<td className={styles.symbolName}>
				{nameElem}
			</td>
			<td className={styles.symbolDesc}>
				{transformEmptyTagElem(desc)}
			</td>
		</tr>
	);
};

Symbol.isMDXComponent		= true;
SymbolTable.isMDXComponent	= true;

SymbolTable.Symbol = Symbol;
