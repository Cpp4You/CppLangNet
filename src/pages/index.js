import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';
import HomepageFeatures from '../components/HomepageFeatures';
import useThemeContext from '@theme/hooks/useThemeContext';

import Translate, { translate } from '@docusaurus/Translate';

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	const {isDarkTheme} = useThemeContext();

	const backgroundImages = {
		'white': 'img/coding-bg-white.jpg',
		'dark': 'img/coding-bg-dark.jpg'
	};

	return (
		<header className={styles.heroBanner}>
			<div className={styles.bgImage}>
				<img src={ backgroundImages[isDarkTheme ? 'dark' : 'white'] }/>
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
