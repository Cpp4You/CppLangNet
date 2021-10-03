import React from 'react';

import Tabs			from '@theme/Tabs';
import TabItem		from '@theme/TabItem';

import Translate	from '@docusaurus/Translate';

import styles from '@site/src/css/components/SwitchView.module.scss'

const langs = new Map();
langs.set('cpp98', 'C++98');
langs.set('cpp03', 'C++03');
langs.set('cpp11', 'C++11');
langs.set('cpp14', 'C++14');
langs.set('cpp17', 'C++17');
langs.set('cpp20', 'C++20');
langs.set('cpp23', 'C++23');

langs.set('until-cpp98', <Translate>until C++98</Translate>);
langs.set('until-cpp03', <Translate>until C++03</Translate>);
langs.set('until-cpp11', <Translate>until C++11</Translate>);
langs.set('until-cpp14', <Translate>until C++14</Translate>);
langs.set('until-cpp17', <Translate>until C++17</Translate>);
langs.set('until-cpp20', <Translate>until C++20</Translate>);
langs.set('until-cpp23', <Translate>until C++23</Translate>);

langs.set('since-cpp98', <Translate>since C++98</Translate>);
langs.set('since-cpp03', <Translate>since C++03</Translate>);
langs.set('since-cpp11', <Translate>since C++11</Translate>);
langs.set('since-cpp14', <Translate>since C++14</Translate>);
langs.set('since-cpp17', <Translate>since C++17</Translate>);
langs.set('since-cpp20', <Translate>since C++20</Translate>);
langs.set('since-cpp23', <Translate>since C++23</Translate>);

export default function SwitchView(props) {

	const content = props.content || { };

	return (
		<Tabs>
			{Object.entries(content).map(([key, value], index) => (
				(value.value || value.simplified || value.detailed)
					?
					(
						<TabItem value={key} label={langs.get(key)} default={value.default || index == 0}>
							{value.simplified
							?
								(
									<>
										<Tabs groupId="view_mode" className={styles.smallTabs}>
											<TabItem value="simplified" label="Simplified" default>
												{value.simplified}
											</TabItem>
											<TabItem value="detailed" label="Detailed">
												{value.detailed}
											</TabItem>
										</Tabs>
									</>
								)
							:
								value.value
							}
						</TabItem>
					)
					:
					(
						<TabItem value={key} label={langs.get(key)} default={index == 0}>
							{value}
						</TabItem>
					)
			))}
		</Tabs>
	);
}