import React, { useRef, useEffect } from 'react';

export default function CustomCodeBlock(props) {

	const limitLines = typeof props.maxLines === "number";

	const style = { };
	
	if (limitLines) {
		const initialHeight = (Math.max(5, props.maxLines)) * 1.43;
		style.height		= `${initialHeight}em`;
	}

	const containerRef = useRef(null);

	useEffect(() => {
		// Valid target?
		if (containerRef.current) {
			const code			= containerRef.current.querySelector(".prism-code");
			const codeParent	= containerRef.current.querySelector(".prism-code").parentNode;
			codeParent.style.display		= "flex";
			codeParent.style.height			= style.height;
			codeParent.style.overflow		= "hidden";
			codeParent.style.resize			= "vertical";
			codeParent.style.minHeight		= "100px";
			codeParent.style.maxHeight		= `90vh`;
			codeParent.style.flexDirection	= "column";
			code.style.overflowY			= "scroll";
			code.style.overflowX			= "auto";
		}
	}, [limitLines, style]);

	return (
		<div 	ref={containerRef}
				data-line-numbers={`${props.lineNumbers}`}
			>
			{props.children}
		</div>
	);
}

CustomCodeBlock.isMDXComponent = true;