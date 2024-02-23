import React from "react";

import Details from "@theme/Details";
import Translate from "@docusaurus/Translate";

// Styles
import styles from "./ProductCard.module.scss";

// Icons
import Star from "@site/static/mui-icons/Star.svg";
import StarHalf from "@site/static/mui-icons/StarHalf.svg";
import StarBorder from "@site/static/mui-icons/StarBorder.svg";


type StarRatingProps = {
  rating: number;
}

export function StarRating(props: StarRatingProps) {
  const stars = [];

  for (let i = 0; i < 10; i += 2) {
    if (props.rating > i + 1)
      stars.push(<Star />);
    else if (props.rating > i)
      stars.push(<StarHalf />);
    else
      stars.push(<StarBorder />);
  }

  return (<div {...props} className={styles.starRating}>{stars}</div>);
}

type SVGIconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type ProductCardProps = {
  children: React.ReactNode;
  img: SVGIconType | string;
  title?: React.ReactNode;
  imgCaption?: React.ReactNode;
  author?: React.ReactNode;
  rating?: number;
  style?: React.CSSProperties;
}

export default function ProductCard(props: ProductCardProps) {

  const childrenArray = React.Children.toArray(props.children);
  const hasActions = childrenArray.findIndex(e => ((e as any).type === ProductCard.Actions)) !== -1;

  let img;
  if (typeof props.img === "string")
    img = <img src={props.img} className={styles.productIcon} alt="Product icon" />;
  else
    img = <props.img className={styles.productIcon} />;

  return (
    <div data-with-actions={hasActions ? "true" : "false"} className={styles.productCard} style={props.style}>
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

type ProductCardDescProps = {
  children: React.ReactNode;
}

function ProductCardDesc(props: ProductCardDescProps) {
  return (
    <div className={styles.productDesc} {...props}>{props.children}</div>
  );
}

type ProductCardActionsProps = {
  children: React.ReactNode;
}

function ProductCardActions(props: ProductCardActionsProps) {
  return (
    <div className={styles.actions} {...props}>{props.children}</div>
  );
}

type ProductCardDetailsProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
}

function ProductCardDetails(props: ProductCardDetailsProps) {
  return (
    <Details
      style={{ marginTop: "15px" }}
      summary={
        <summary>{props.title || (<Translate>Details</Translate>)}</summary>
      }
    >
      {props.children}
    </Details>
  );
}

ProductCard.Desc = ProductCardDesc;
ProductCard.Actions = ProductCardActions;
ProductCard.Details = ProductCardDetails;

ProductCard.isMDXComponent = true;