import React			from 'react';
import styles			from './HomepageFeatures.module.scss';

import useBaseUrl		from '@docusaurus/useBaseUrl';
import ThemedImage		from '@theme/ThemedImage';


import { translate }	from '@docusaurus/Translate';

const VscIconsFolder = 'img/icons/vscode/dark';
const vscIcon = (name) => `${VscIconsFolder}/${name}.svg`;
const vscThemedIcon = (light, dark = light) => ({
		default: {
			light: `img/icons/vscode/light/${light}.svg`,
			dark: `img/icons/vscode/dark/${dark}.svg`,
		},
		color: {
			light: `img/icons/vscode/light/${light}-color.svg`,
			dark: `img/icons/vscode/dark/${dark}-color.svg`,
		}
	});



const FeatureList = [
	{
		title:		translate({ message: 'Learn', id: 'langFeature.Learn' }),
		url:		'learn/',
		svgPath:	vscThemedIcon('book'),
		description: (
			<>
				None yet.
			</>
		),
	},
	{
		title:		translate({ message: 'Docs', id: 'langFeature.Docs' }),
		svgPath:	vscThemedIcon('repo'),
		url:		'docs/',
		description: (
			<>
				None yet.
			</>
		),
	},
	{
		title:		translate({ message: 'Tools', id: 'langFeature.Tools' }),
		url:		'tools/',
		svgPath:	vscThemedIcon('tools'),
		description: (
			<>
				None yet.
			</>
		),
	},
	{
		title:		translate({ message: 'Community', id: 'langFeature.Community' }),
		url:		'community/',
		svgPath:	vscThemedIcon('community'),
		description: (
			<>
				None yet.
			</>
		),
	},
];

function Feature({svgPath, title, url, description}) {
	return (
		<a href={url} className={styles.pageCard}>
			<div className={styles.pageCardSvg}>
				{typeof svgPath == "object" && <ThemedImage className={styles.normalIcon} sources={svgPath.default} />}
				{typeof svgPath == "string" && <img src={svgPath} alt={title} />}
				
				{typeof svgPath === "object" && typeof svgPath.color === "object" && <ThemedImage className={styles.hoverIcon} sources={svgPath.color} />}
			</div>
			<div className={styles.pageCardText}>
				<p>{title}</p>
				{/* <p>{description}</p> */}
			</div>
		</a>
	);
}

export default function HomepageFeatures() {
	return (
		<>
			<section className={styles.features}>
				<div className={styles.featuresContainer}>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</section>
			<section className={styles.overview}>
				<div className={styles.overviewContainer}>
					<div className={styles.overviewContent}>
						<h1>Watch talks</h1>
						<p>
							Get advices from professionals on different topics related to C++ programming.
							Use our search tool to find the best talks for you. Use tags to filter the results.
						</p>
						<a className={styles.actionButton} href="/talks">Browse catalogue</a>
					</div>
					<figure><video loop autoPlay muted src={useBaseUrl("video/talks.mp4")}/></figure>
				</div>
			</section>
			<section className={styles.overview}>
				<div className={styles.overviewContainer}>
					<div className={styles.overviewContent}>
						<h1>Join community</h1>
						<p>
							Talk with other C++ passionates, engage in common projects,
							get updates, ask questions, do a code review and more.
							Browse Facebook groups, Discord servers, visit Reddit, Slack,
							Forums etc.
						</p>
						<a className={styles.actionButton} href="/community">Get involved</a>
					</div>
					<figure><img src={useBaseUrl("img/community.png")}/></figure>
				</div>
			</section>
			<section className={styles.overview}>
				<div className={styles.overviewContainer}>
					<div className={styles.overviewContent}>
						<h1>Browse papers</h1>
						<p>
							Read standards, proposals and other papers related to C++ language.
							Use our search tool to find the best papers for you. Use tags to filter the results.
						</p>
						<a className={styles.actionButton} href="/papers">Browse</a>
					</div>
					<figure><img src={useBaseUrl("img/papers.png")}/></figure>
				</div>
			</section>
		</>
	);
}
