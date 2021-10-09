import React from 'react';

import styles from '@site/src/css/components/TenorGIF.module.scss';

export default function TenorGIF(props) {
	return (
		<div
				className={[styles.tenorGIF, "tenor-gif-embed"].join(" ")}
				data-postid			={props.postid}
				data-share-method	="host"
				data-aspect-ratio	={props.aspectRatio}
				data-width			={props.width || "100%"}
				centered			={props.centered ? "true" : "false"}
			>
			{props.children}
			<a href="https://tenor.com/view/falla-into-hole-endless-repetition-absurdo-fall-gif-16349863">
				Falla Into Hole Endless Repetition GIF
			</a>
			from
			<a href="https://tenor.com/search/falla+into+hole-gifs">Falla Into Hole GIFs</a>
		</div>
	);
}