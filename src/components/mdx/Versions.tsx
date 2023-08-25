import React		from "react";
import Translate	from "@docusaurus/Translate";

import styles		from "./Versions.module.scss";

export const LanguageVersions = new Map<string, React.ReactNode>();

LanguageVersions.set("cpp98", "C++98");
LanguageVersions.set("cpp03", "C++03");
LanguageVersions.set("cpp11", "C++11");
LanguageVersions.set("cpp14", "C++14");
LanguageVersions.set("cpp17", "C++17");
LanguageVersions.set("cpp20", "C++20");
LanguageVersions.set("cpp23", "C++23");

LanguageVersions.set("deprecated-",		 <Translate>deprecated</Translate>);
LanguageVersions.set("deprecated-cpp98", <Translate>deprecated in C++98</Translate>);
LanguageVersions.set("deprecated-cpp03", <Translate>deprecated in C++03</Translate>);
LanguageVersions.set("deprecated-cpp11", <Translate>deprecated in C++11</Translate>);
LanguageVersions.set("deprecated-cpp14", <Translate>deprecated in C++14</Translate>);
LanguageVersions.set("deprecated-cpp17", <Translate>deprecated in C++17</Translate>);
LanguageVersions.set("deprecated-cpp20", <Translate>deprecated in C++20</Translate>);
LanguageVersions.set("deprecated-cpp23", <Translate>deprecated in C++23</Translate>);

LanguageVersions.set("until-cpp98", <Translate>until C++98</Translate>);
LanguageVersions.set("until-cpp03", <Translate>until C++03</Translate>);
LanguageVersions.set("until-cpp11", <Translate>until C++11</Translate>);
LanguageVersions.set("until-cpp14", <Translate>until C++14</Translate>);
LanguageVersions.set("until-cpp17", <Translate>until C++17</Translate>);
LanguageVersions.set("until-cpp20", <Translate>until C++20</Translate>);
LanguageVersions.set("until-cpp23", <Translate>until C++23</Translate>);

LanguageVersions.set("since-cpp98", <Translate>since C++98</Translate>);
LanguageVersions.set("since-cpp03", <Translate>since C++03</Translate>);
LanguageVersions.set("since-cpp11", <Translate>since C++11</Translate>);
LanguageVersions.set("since-cpp14", <Translate>since C++14</Translate>);
LanguageVersions.set("since-cpp17", <Translate>since C++17</Translate>);
LanguageVersions.set("since-cpp20", <Translate>since C++20</Translate>);
LanguageVersions.set("since-cpp23", <Translate>since C++23</Translate>);

LanguageVersions.set("removed-",	  <Translate>deleted</Translate>);
LanguageVersions.set("removed-cpp98", <Translate>removed in C++98</Translate>);
LanguageVersions.set("removed-cpp03", <Translate>removed in C++03</Translate>);
LanguageVersions.set("removed-cpp11", <Translate>removed in C++11</Translate>);
LanguageVersions.set("removed-cpp14", <Translate>removed in C++14</Translate>);
LanguageVersions.set("removed-cpp17", <Translate>removed in C++17</Translate>);
LanguageVersions.set("removed-cpp20", <Translate>removed in C++20</Translate>);
LanguageVersions.set("removed-cpp23", <Translate>removed in C++23</Translate>);

interface MarkedTextParameters {
	children: React.ReactNode;
	className?: string;
}

function MarkedText({children, className}: MarkedTextParameters) {
	return <span className={styles.markedText + (className ? " " + className : "")}>{children}</span>;
}

interface VersionProps {
	children: React.ReactNode;

	v: "cpp98" | "cpp03" | "cpp11" | "cpp14" | "cpp17" | "cpp20" | "cpp23";
}


export function Since({children, v}: VersionProps)
{
	return (
		<MarkedText className={styles.since}>{children} 
			&nbsp;<span className={styles.versionNumber}><small>({LanguageVersions.get(`since-${v}`)})</small></span>
		</MarkedText>
	);
}

export function Until({children, v}: VersionProps)
{
	return (
		<MarkedText className={styles.until}>{children} 
			&nbsp;<span className={styles.versionNumber}><small>({LanguageVersions.get(`until-${v}`)})</small></span>
		</MarkedText>
	);
}

export function Deprecated({children, v}: VersionProps)
{
	return (
		<MarkedText className={styles.deprecated}>{children} 
			&nbsp;<span className={styles.versionNumber}><small>({LanguageVersions.get(`deprecated-${v}`)})</small></span>
		</MarkedText>
	);
}

export function Removed({children, v}: VersionProps)
{
	return (
		<MarkedText className={styles.removed}>{children} 
			&nbsp;<span className={styles.versionNumber}><small>({LanguageVersions.get(`removed-${v}`)})</small></span>
		</MarkedText>
	);
}

export function Version({children, v}: VersionProps)
{
	return (
		<MarkedText className={styles.version}>{children} 
			<span className={styles.versionNumber}><small>({LanguageVersions.get(`${v}`)})</small></span>
		</MarkedText>
	);
}