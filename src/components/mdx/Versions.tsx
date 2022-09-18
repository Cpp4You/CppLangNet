import React from "react";

import styles from "./Versions.module.scss";

interface MarkedTextParameters {
	children: React.ReactNode;
	className?: string;
}

function MarkedText({children, className}: MarkedTextParameters) {
	return <span className={styles.markedText + (className ? " " + className : "")}>{children}</span>;
}

interface MarkedTextWrapperProps {
	children: React.ReactNode;
}

export function Since({children}: MarkedTextWrapperProps)
{
	return <MarkedText className={styles.since}>{children} <span className={styles.versionNumber}><small>(since C++17)</small></span></MarkedText>;
}

export function Until({children}: MarkedTextWrapperProps)
{
	return <MarkedText className={styles.until}>{children} <span className={styles.versionNumber}><small>(until C++17)</small>.</span></MarkedText>;
}

export function Deprecated({children}: MarkedTextWrapperProps)
{
	return <MarkedText className={styles.deprecated}>{children} <span className={styles.versionNumber}><small>(deprecated since C++17)</small>.</span></MarkedText>;
}



