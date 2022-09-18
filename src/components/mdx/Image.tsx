import React			from "react";
import useBaseUrl		from "@docusaurus/useBaseUrl";

import transformEmptyTagElem from "../../helper/TransformEmptyTagElem";

type ImageProps = {
	desc?: React.ReactNode;
	center?: boolean;
	fullwidth?: boolean;
	border?: boolean;
	style?: React.CSSProperties;

	minwidth?: number;
	width?: number;
	maxwidth?: number;
	minheight?: number;
	height?: number;
	maxheight?: number;

	src?: string;
}

export default function Image(props: ImageProps)
{
	// Setup description
	let desc = null;
	if (props.desc)
	{
		const descStyle: React.CSSProperties =
			props.center ? {
				textAlign: "center",
				display: "block"
			} : {};
			
		desc = <small style={descStyle}>{transformEmptyTagElem(props.desc)}</small>;
	}

	const fullWidth = props.fullwidth || props.center;

	const style: React.CSSProperties = {
		border:		(props.border		? "1px solid gray"	: undefined),
		display:	(fullWidth			? "block"			: "inline-block"),
	};

	const imgStyle = props.style || {};
	imgStyle.minWidth	= props.minwidth	|| undefined;
	imgStyle.width		= props.width		|| undefined;
	imgStyle.maxWidth	= props.maxwidth	|| undefined;
	imgStyle.minHeight	= props.minheight	|| undefined;
	imgStyle.height		= props.height 		|| undefined;
	imgStyle.maxHeight	= props.maxheight	|| undefined;
	imgStyle.display	= "block";
	// Temp Fix: blurry images on Chrome
	imgStyle.imageRendering = "-webkit-optimize-contrast";

	if (props.center)
		imgStyle.margin = "0 auto";

	const processedProps = {...props};

	if (typeof props.src === "string")
		processedProps.src = props.src.startsWith("/img/") ? useBaseUrl(props.src) : props.src;


	delete processedProps.border;
	delete processedProps.center;
	delete processedProps.fullwidth;
	delete processedProps.style;

	delete processedProps.minwidth;
	delete processedProps.width;
	delete processedProps.maxwidth;

	delete processedProps.minheight;
	delete processedProps.height;
	delete processedProps.maxheight;

	delete processedProps.desc;


	return (
		<>
			<div style={style}>
				<img {...processedProps} style={imgStyle}/>
			</div>
			{desc}
		</>
	);
}

Image.isMDXComponent = true;