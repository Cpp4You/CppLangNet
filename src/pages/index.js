import React			from 'react';
import Link				from '@docusaurus/Link';
import Translate		from '@docusaurus/Translate';
import Layout			from '@theme/Layout';
import ThemedImage		from '@theme/ThemedImage';
import useBaseUrl		from '@docusaurus/useBaseUrl';

import HomepageFeatures	from '../components/HomepageFeatures';
import styles			from './index.module.scss';


function HomepageHeader() {

	return (
		<header className={styles.heroBanner}>
			<div className={styles.bgImage}>
			<ThemedImage
					alt="Background image"
					sources={{
						light: useBaseUrl('/img/coding-bg-white.jpg'),
						dark: useBaseUrl('/img/coding-bg-dark.jpg'),
					}}
				/>;
			</div>
			<div className={styles.container}>
				<div className={styles.textPart}>
					<h1 className={styles.title}><Translate>C++ Programming Language</Translate></h1>
					<p className={styles.subtitle}><Translate>Learn how to build blazing fast software</Translate></p>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="/learn">
							<Translate>Start learning</Translate>
						</Link>
					</div>
				</div>
				<div className={styles.interactiveEditor}>
					<iframe src="https://repl.it/@poetakodu/SortVector-Cpp20?lite=true" />
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	return (
		<Layout
			description="An ultimate C++ language wiki">
				
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
