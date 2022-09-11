import React			from 'react';
import Link				from '@docusaurus/Link';
import Translate		from '@docusaurus/Translate';
import Layout			from '@theme/Layout';
import CodeBlock		from '@theme/CodeBlock';
import Tabs				from '@theme/Tabs';
import TabItem			from '@theme/TabItem';

import HomepageFeatures	from '../components/HomepageFeatures';
import styles			from './index.module.scss';

import Code_Sorting		from "!!raw-loader!./ExampleCppCode_Sorting.cpp";
import Code_HelloWorld	from "!!raw-loader!./ExampleCppCode_HelloWorld.cpp";
import Code_FizzBuzz	from "!!raw-loader!./ExampleCppCode_FizzBuzz.cpp";
import Code_ReadFile	from "!!raw-loader!./ExampleCppCode_ReadFile.cpp";

function HomepageHeader() {

	return (
		<header className={styles.heroBanner}>
			<div className={styles.container}>
				<div className={styles.textPart}>
					<h1 className={styles.title}>
						C++
					</h1>
					<p className={styles.subtitle}>
						<Translate>Programming Language</Translate>
					</p>
					<p className={styles.subtitleMessages}>
						<Translate>A completely free all-in-one website for C++ developers.</Translate>
					</p>
				</div>
			</div>
		</header>
	);
}

const Waves = () => {
	return (
	<div>
		<svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
			viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
			<defs>
				<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
			</defs>
			<g className={styles.wavesParallax}>
				<use xlinkHref="#gentle-wave" x="48" y="0" />
				<use xlinkHref="#gentle-wave" x="48" y="3" />
				<use xlinkHref="#gentle-wave" x="48" y="5" />
				<use xlinkHref="#gentle-wave" x="48" y="7" />
			</g>
		</svg>
	</div>
	)
}

export default function Home() {
	return (
		<Layout
			description="The modern website for C++ language to improve its accessibility.">
				
			<HomepageHeader />
			<main>
				<Waves />
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
