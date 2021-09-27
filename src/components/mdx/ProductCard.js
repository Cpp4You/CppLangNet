import React from 'react';

import Star			from '@site/static/mui-icons/Star.svg';
import StarHalf		from '@site/static/mui-icons/StarHalf.svg';
import StarBorder	from '@site/static/mui-icons/StarBorder.svg';


import styles from '@site/src/css/components/ProductCard.module.scss'

export function StarRating(props) {
	const stars = [];

	for(let i = 0; i < 10; i += 2)
	{
		if (props.rating > i + 1)
			stars.push(<Star />);
		else if (props.rating > i)
			stars.push(<StarHalf />);
		else
			stars.push(<StarBorder />);
	}

	return (<div {...props} className={styles.starRating}>{stars}</div>);
}

export default function ProductCard(props) {

	const childrenArray = React.Children.toArray(props.children);
	const hasActions = childrenArray.findIndex(e => {
		return e.type === ProductCard.Actions;
	}) !== -1;

	let img;
	if (typeof props.img === 'string')
		img = <img src={props.img} className={styles.productIcon} />;
	else
		img = <props.img className={styles.productIcon} />;

	return (
		<div withactions={hasActions ? "true": "false"} className={styles.productCard} {...props}>
			<figure>
				{props.imgCaption && (<figcaption>{props.imgCaption}</figcaption>)}
				{img}
			</figure>
			<header>
				<h3>{props.title} {props.author && (<span className={styles.author}>({props.author})</span>)}</h3>
				{props.rating !== undefined && (<StarRating rating={props.rating} />)}
			</header>
			{props.children}
		</div>
	);
}

ProductCard.Desc = (props) => {
	return (
		<div className={styles.productDesc} {...props}>{props.children}</div>
	);
};

ProductCard.Actions = (props) => {
	return (
		<div className={styles.actions} {...props}>{props.children}</div>
	);
};

ProductCard.isMDXComponent = true;