import React		from "react";
import styles		from "./StaticTag.module.scss";

export function Static() {
	return <span className={styles.staticTag}><small>static</small></span>;
}