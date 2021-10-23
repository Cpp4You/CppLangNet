import React			from 'react';
import IdealImage		from '@theme/IdealImage';

export default function Image(props)
{
	const fullWidth = props.fullwidth || props.center;

	const style = {
		border:		(props.border		? "1px solid gray"	: undefined),
		textAlign:	(props.center		? "center"			: undefined),
		display:	(fullWidth			? "block"			: "inline-block"),	
	};

	if (typeof props.img === "string")
		props.img = props.img.startsWith("/img/") ? useBaseUrl(props.img) : props.img;

	const imgStyle = props.style || {};
	imgStyle.minWidth	= props.minwidth || undefined;
	imgStyle.width		= props.width || undefined;
	imgStyle.maxWidth	= props.maxwidth || undefined;
	imgStyle.minHeight	= props.minheight || undefined;
	imgStyle.height		= props.height || undefined;
	imgStyle.maxHeight	= props.maxheight || undefined;

	const processedProps = {...props};
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

	return (
		<div style={style}>
			<IdealImage {...processedProps} style={imgStyle}/>
		</div>
	);
}