import React			from 'react';
import clsx				from 'clsx';
import styles			from './HomepageFeatures.module.scss';

import { translate }	from '@docusaurus/Translate';

const VscIconsFolder = 'img/icons/vscode/dark';
const vscIcon = (name) => `${VscIconsFolder}/${name}.svg`;



const FeatureList = [
	{
		title:		translate({ message: 'Learn', id: 'langFeature.Learn' }),
		url:		'./learn/index',
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
		url:		'./docs/index',
		description: (
			<>
				Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
				ahead and move your docs into the <code>docs</code> directory.
			</>
		),
	},
	{
		title:		translate({ message: 'Features', id: 'langFeature.Features' }),
		url:		'./features/index',
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
		url:		'./tools/index',
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
		<section className={styles.features}>
			<div className={styles.featuresContainer}>
				{FeatureList.map((props, idx) => (
					<Feature key={idx} {...props} />
				))}
			</div>
		</section>
	);
}
