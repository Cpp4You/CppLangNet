import React from 'react';
import styles from '@site/src/css/components/ClassSummary.module.scss'

import SymbolTable from './SymbolTable';

import { ClassContext } from './ClassContext';
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

	const hasMetaInfo = (props.headerName || props.since);

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
				{hasMetaInfo && (
					<>
					<table className={styles.meta}>
						<tbody>
							{props.headerName && (
								<tr>
									<td>Defined in</td>
									<td>{props.headerName}</td>
								</tr>
							)}
							{props.since && (
								<tr>
									<td>Since</td>
									<td>{props.since}</td>
								</tr>
							)}
						</tbody>
					</table>
					</>
				)}
			</header>
			{props.children}
		</ClassContext.Provider>
	);
}

ClassSummary.isMDXComponent = true;