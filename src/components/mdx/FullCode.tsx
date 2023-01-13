import React from "react";

import Details from "@theme/Details";

interface FullCodeProps {
	content: React.ReactNode;
}

export default function FullCode({ content }: FullCodeProps) {

	return (
		<Details summary={<summary>See full code</summary>}>
			<div>
				{content}
			</div>
		</Details>
	);
}

FullCode.isMDXComponent = true;