import React			from 'react';
import useBaseUrl		from '@docusaurus/useBaseUrl';

import transformEmptyTagElem from "@site/src/helper/TransformEmptyTagElem";

export default function Image(props)
{
	// Setup description
	let desc = null;
	if (props.desc)
	{
		if (props.center)
			desc = <center><small>{transformEmptyTagElem(props.desc)}</small></center>;
		else
			desc = <><small>{transformEmptyTagElem(props.desc)}</small></>;
	}

	const fullWidth = props.fullwidth || props.center;

	const style = {
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