import React from "react";
import Layout from "@theme-original/Layout";

export default function LayoutWrapper(props) {
	return (
		<>
			<div id="fullpage-background-container">
				<div id="fullpage-background" />
			</div>
			<Layout {...props} />
		</>
	);
}
