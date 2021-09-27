import React from 'react';

import styles from '@site/src/css/components/Note.module.scss'

export default function Note(props) {

	let variant = '';
	if (props.info)
		variant = 'info';
	else if (props.important)
		variant = 'important';
	else if (props.error)
		variant = 'error';

	return (
		<div variant={variant} className={styles.note} {...props}>
			<h3 className={styles.title}>{props.title}</h3>
			{props.children}
		</div>
	);
}

Note.isMDXComponent = true;