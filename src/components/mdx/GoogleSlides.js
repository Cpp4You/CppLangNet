import React from 'react';

import styles from '@site/src/css/components/GoogleSlides.module.scss';

export default function GoogleSlides(props)
{
	let url = props.src + "?";
	
	const params = [];
	if (props.autoStart === false)
		params.push("start=false");
	else
		params.push("start=true");

	if (props.loop === false)
		params.push("loop=false");
	else
		params.push("loop=true");

	if (typeof props.delay === "number")
		params.push(`delayms=${props.delay}`);
	else
		params.push(`delayms=1000`);
	
	const style = {};

	let ParentComp = ({children}) => <>{children}</>;
	if (props.centered)
		ParentComp = ({children}) => <center>{children}</center>;

	if (props.fullWidth) {
		style.width = "100%";
	}
	else {
		style.width = "80%";
	}

	if (typeof props.aspectRatio === "number")
		style.aspectRatio = `${props.aspectRatio} / 1`;
	else
		style.aspectRatio = props.aspectRatio || '16 / 9';
	
	url += params.join('&');
	
	return (
		<ParentComp>
			<iframe
				className				={styles.slideShow}
				style					={style}
				src						={url}
				frameBorder				={0}
				allowFullScreen			={true}>
			</iframe>
		</ParentComp>
	);
}