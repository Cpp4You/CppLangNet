import React from 'react';

import styles from '@site/src/css/components/Button.module.scss'

export default function Button(props) {
	
	return (
		<button full-width={props.fullWidth ? "true" : undefined} className={styles.button}>
			{props.children}
		</button>
	);
}

Button.isMDXComponent = true;