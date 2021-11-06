import React, { useEffect }		from 'react';
import Link						from '@docusaurus/Link';
import Translate				from '@docusaurus/Translate';
import Layout					from '@theme/Layout';
import useThemeContext			from '@theme/hooks/useThemeContext';

import HomepageFeatures			from '../components/HomepageFeatures';
import styles					from './index.module.scss';


function HomepageHeader() {
	const {isDarkTheme} = useThemeContext();

	const backgroundImages = {
		'white':	'img/coding-bg-white.jpg',
		'dark':		'img/coding-bg-dark.jpg'
	};
	
	const recalcImage = () => backgroundImages[isDarkTheme ? 'dark' : 'white'];
		
	let bgImg = recalcImage();

	useEffect(
		() => {
			let recalcTimer = setTimeout(() => {
				bgImg = recalcImage();
			}, 1000);

			// Clearing
			return () => {
				clearTimeout(recalcTimer);
			};
		},
		[]
	);

	return (
		<header className={styles.heroBanner}>
			<div className={styles.bgImage}>
				<img src={ bgImg }/>
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
					<iframe src="https://repl.it/@poetakodu/SortVector?lite=true&console=0" />
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
