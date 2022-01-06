import React			from 'react';
import Link				from '@docusaurus/Link';
import Translate		from '@docusaurus/Translate';
import Layout			from '@theme/Layout';
import ThemedImage		from '@theme/ThemedImage';
import CodeBlock		from '@theme/CodeBlock';
import Tabs				from '@theme/Tabs';
import TabItem			from '@theme/TabItem';
import useBaseUrl		from '@docusaurus/useBaseUrl';

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
					<div className={styles.callToAction}>
						<Link
							className={"button button--secondary button--lg" + " " + styles.btnGrad}
							to="/learn">
							<Translate>Get started</Translate> <span style={{ fontWeight: "normal"}}>🚀</span>
						</Link>
					</div>
				</div>
				<div className={styles.interactiveEditor}>
					<Tabs>
						<TabItem value="sorting" label="Sorting" default>
							<CodeBlock className="language-cpp">{Code_Sorting}</CodeBlock>
						</TabItem>
						<TabItem value="hello_world" label="Hello, World" default>
							<CodeBlock className="language-cpp">{Code_HelloWorld}</CodeBlock>
						</TabItem>
						<TabItem value="fizzbuzz" label="FizzBuzz" default>
							<CodeBlock className="language-cpp">{Code_FizzBuzz}</CodeBlock>
						</TabItem>
						<TabItem value="read_file" label="Read file" default>
							<CodeBlock className="language-cpp">{Code_ReadFile}</CodeBlock>
						</TabItem>
					</Tabs>
					
					{/* <iframe src="https://repl.it/@poetakodu/SortVector-Cpp20?lite=true" /> */}
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
