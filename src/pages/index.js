import React				from 'react';
import Layout				from '@theme/Layout';
import IdealImage			from '@theme/IdealImage';
import Link					from '@docusaurus/Link';
import Translate			from '@docusaurus/Translate';
import HomepageFeatures		from '../components/HomepageFeatures';

import useDocusaurusContext	from '@docusaurus/useDocusaurusContext';
import useBaseUrl			from '@docusaurus/useBaseUrl';
import useThemeContext		from '@theme/hooks/useThemeContext';

import styles				from './index.module.scss';


function HomepageHeader() {
	
	const {siteConfig}	= useDocusaurusContext();
	const {isDarkTheme}	= useThemeContext();

	const backgroundImages = {
		'white': '/img/coding-bg-white.jpg',
		'dark': '/img/coding-bg-dark.jpg'
	};

	return (
		<header className={styles.heroBanner}>
			<div className={styles.bgImage}>
				<IdealImage img={ useBaseUrl(backgroundImages[isDarkTheme ? 'dark' : 'white']) }/>
			</div>
			<div className={styles.container}>
				<div className={styles.textPart}>
					<h1 className={styles.title}><Translate>C++ Programming Language</Translate></h1>
					<p className={styles.subtitle}><Translate>Learn how to build blazing fast software</Translate></p>
					<div className={styles.buttons}>
						<Link
							className="button button--secondary button--lg"
							to="/learn/index">
							<Translate>Start learning</Translate>
						</Link>
					</div>
				</div>
				<div className={styles.interactiveEditor}>
					<iframe src="https://repl.it/@poetakodu/SortVector?lite=true&console=0" />
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const {siteConfig} = useDocusaurusContext();

	return (
		<Layout
			description="An ultimate C++ language wiki">
				
			<link rel="preload" as="image" href="img/coding-bg-dark.jpg"/>
			<link rel="preload" as="image" href="img/coding-bg-white.jpg"/>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
