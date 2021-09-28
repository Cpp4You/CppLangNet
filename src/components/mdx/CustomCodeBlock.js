import React from 'react';

export default function CustomCodeBlock(props) {

	const limitLines = typeof props.maxLines === "number";

	const style = { };

	if (limitLines) {
		const initialHeight = Math.max(5, props.maxLines) * 1.37 + (props.withTitle ? 4.3 : 1.35);
		style.height	= `${initialHeight}em`;
		style.overflowX	= "auto"; // show scroll when needed
		style.overflowY	= "auto"; // show scroll when needed

		style.marginBottom	= "15px";
		if (props.resizable)
		{
			style.resize		= "vertical";
			style.maxHeight 	= props.maxHeight || "800px";
			style.minHeight 	= props.minHeight || "200px";
		}
	}

	return (
		<div 	line-numbers={`${props.lineNumbers}`}
				style={ style }
			>
			{props.children}
		</div>
	);
}

CustomCodeBlock.isMDXComponent = true;