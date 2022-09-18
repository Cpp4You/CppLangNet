import React from "react";

import styles from "./GoogleSlides.module.scss";

type GoogleSlidesProps = {
	children:		React.ReactNode;
	src:			string;
	autoStart?:		boolean;
	loop?:			boolean;
	delay?:			number; // In milliseconds
	centered?:		boolean;
	fullWidth?: 	boolean;
	aspectRatio?:	number;
}

export default function GoogleSlides(props: GoogleSlidesProps)
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
		params.push("delayms=1000");
	
	const style: React.CSSProperties = {};

	if (props.fullWidth) {
		style.width = "100%";
	}
	else {
		style.width = "80%";
	}

	if (typeof props.aspectRatio === "number")
		style.aspectRatio = `${props.aspectRatio} / 1`;
	else
		style.aspectRatio = props.aspectRatio || "16 / 9";
	
	url += params.join("&");
	
	const centeredStyle: React.CSSProperties = {
		display: "flex",
		margin: "0 auto",
		justifyContent: "center"
	};

	return (
		<div style={props.centered ? centeredStyle : undefined}>
			<iframe
				className		={styles.slideShow}
				style			={style}
				src				={url}
				frameBorder		={0}
				allowFullScreen	={true}>
			</iframe>
		</div>
	);
}