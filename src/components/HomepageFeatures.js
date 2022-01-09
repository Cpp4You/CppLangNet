import React			from 'react';
import clsx				from 'clsx';
import styles			from './HomepageFeatures.module.scss';

import useBaseUrl		from '@docusaurus/useBaseUrl';
import { translate }	from '@docusaurus/Translate';

const VscIconsFolder = 'img/icons/vscode/dark';
const vscIcon = (name) => `${VscIconsFolder}/${name}.svg`;



const FeatureList = [
	{
		title:		translate({ message: 'Learn', id: 'langFeature.Learn' }),
		url:		'learn/',
		svgPath:	vscIcon('book'),
		description: (
			<>
				Docusaurus was designed from the ground up to be easily installed and
				used to get your website up and running quickly.
			</>
		),
	},
	{
		title:		translate({ message: 'Docs', id: 'langFeature.Docs' }),
		svgPath:	vscIcon('repo'),
		url:		'docs/',
		description: (
			<>
				Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
				ahead and move your docs into the <code>docs</code> directory.
			</>
		),
	},
	{
		title:		translate({ message: 'Features', id: 'langFeature.Features' }),
		url:		'features/',
		svgPath:	vscIcon('extensions'),
		description: (
			<>
				Extend or customize your website layout by reusing React. Docusaurus can
				be extended while reusing the same header and footer.
			</>
		),
	},
	{
		title:		translate({ message: 'Tools', id: 'langFeature.Tools' }),
		url:		'tools/',
		svgPath:	vscIcon('tools'),
		description: (
			<>
				Extend or customize your website layout by reusing React. Docusaurus can
				be extended while reusing the same header and footer.
			</>
		),
	},
];

function Feature({svgPath, title, url}) {
	return (
		<a href={url} className={styles.pageCard}>
			<div className={styles.pageCardSvg}>
				<img src={svgPath} className={styles.featureSvg} alt={title} />
			</div>
			<div className={styles.pageCardText}>
				<h3>{title}</h3>
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
					<figure><video loop autoPlay={true} src={useBaseUrl("video/talks.mp4")}/></figure>
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
