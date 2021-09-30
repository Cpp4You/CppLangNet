import React from 'react';
import styles from '@site/src/css/components/ClassSummary.module.scss'

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
}

const ClassContext = React.createContext( { name: "Unknown", folder: "unknown" } );

export default function ClassSummary(props)
{
	let namespaces = [];
	if (typeof props.namespaces === "string")
		namespaces.push(props.namespaces);
	else
		namespaces = props.namespaces;

	const ctx = {
		name: props.name,
		folder: props.folder || props.name.toLowerCase()
	};

	return (
		<ClassContext.Provider value={ctx}>
			<header>
				<span>Class summary</span>
				<h2 className={styles.className}>
					{namespaces &&
						<span className={styles.namespaceList}>
							{namespaces.join('::')}::
						</span>
					}
					{props.name}
				</h2>
			</header>
			{props.children}
		</ClassContext.Provider>
	);
}

ClassSummary.SymbolTable = function(props)
{
	const childrenArray = React.Children.toArray(props.children);

	const displayArray = (arr) => {
		if (arr.length === 0) return null;

		const sorted = arr.sort((l, r) => (readAccess(l).Order < readAccess(r).Order));

		return (
			<table no-traits={`${props.noTraits || "false"}`} className={styles.summarySection}>
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


ClassSummary.Symbol = function(props) {

	const ctx = React.useContext(ClassContext);

	let desc = null;
	if (props.desc)
		desc = props.desc;
	else if (props.children)
		desc = props.children;

	let nameElem = props.name;

	if (props.link || props.autoLink)
		nameElem = <a href={props.link || `./${ctx.folder}/${(props.linkName || props.name)}`}>{nameElem}</a>;

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

	return (
		<tr>
			<td className={styles.symbolProp}>
				{mapAccess(props)}
				{mapModifier(props.static,		'modStatic',	'static')}
				{mapModifier(props.constexpr,	'modConstexpr',	'constexpr')}
				{mapModifier(props.const,		'modConst',		'const')}
				{mapModifier(props.const,		'modVolatile',	'volatile')}
			</td>
			<td className={styles.symbolName}>
				{nameElem}
			</td>
			<td className={styles.symbolDesc}>{desc}</td>
		</tr>
	);
};

ClassSummary.TypeName = function(props) {
	return (<ClassSummary.Symbol {...props}>{props.children}</ClassSummary.Symbol>);
};
ClassSummary.DataMember = function(props) {
	return (<ClassSummary.Symbol {...props}>{props.children}</ClassSummary.Symbol>);
};
ClassSummary.Method = function(props) {
	return (<ClassSummary.Symbol {...props}>{props.children}</ClassSummary.Symbol>);
};

ClassSummary.isMDXComponent = true;