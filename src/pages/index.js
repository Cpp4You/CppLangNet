import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<div className="row" style={ { margin: "0 auto" } }>
					<div className="col col-3">
						<h1 className="hero__title">{siteConfig.title}</h1>
						<p className="hero__subtitle">{siteConfig.tagline}</p>
						<div className={styles.buttons}>
							<Link
								className="button button--secondary button--lg"
								to="/learn/intro">
								Start learning
							</Link>
						</div>
					</div>
					<div className="col col-9" style={ { minHeight: "600px" } }>
						<iframe src="https://repl.it/@poetakodu/SortVector?lite=true" style={ { height: "100%", width: "100%" }}></iframe>
					</div>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout
			description="Description will go into a meta tag in <head />">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
