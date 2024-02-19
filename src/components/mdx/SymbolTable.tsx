import React from "react";

import transformEmptyTagElem from "@site/src/helper/TransformEmptyTagElem";

import styles from "./SymbolTable.module.scss";

import { ClassContext } from "./ClassContext";

export const Access = {
  None: {
    Order: 0,
    ShortName: "",
    FullName: "",
    Style: styles.accessPublic,
  },
  Public: {
    Order: 1,
    ShortName: "pub",
    FullName: "public",
    Style: styles.accessPublic,
  },
  Protected: {
    Order: 2,
    ShortName: "prot",
    FullName: "protected",
    Style: styles.accessProtected,
  },
  Private: {
    Order: 3,
    ShortName: "priv",
    FullName: "private",
    Style: styles.accessPrivate,
  }
};

type AccessProps = {
  none?: boolean,
  pub?: boolean,
  public?: boolean,
  prot?: boolean,
  protected?: boolean,
  priv?: boolean,
  private?: boolean,
};

function readAccess(props: AccessProps) {
  if (typeof props !== "object")
    return Access.Public;

  if (props.none)
    return Access.None;
  if (props.pub || props.public)
    return Access.Public;
  if (props.prot || props.protected)
    return Access.Protected;
  if (props.priv || props.private)
    return Access.Private;

  return Access.Public;
}


type SymbolTableProps = {
  noTraits?: boolean,
  children: React.ReactNode,
};

function compareOrder(l: React.ReactElement, r: React.ReactElement): number {
  return readAccess(l).Order - readAccess(r).Order;
}

export default function SymbolTable(props: SymbolTableProps) {
  const childrenArray = React.Children.toArray(props.children);

  if (childrenArray.length === 0) {
    return null;
  }

  const sortedChildren = childrenArray.sort(compareOrder);

  const noTraits = props.noTraits || false;

  return (
    <table data-no-traits={noTraits ? "true" : "false"} className={styles.symbolTable}>
      <tbody>
        {sortedChildren}
      </tbody>
    </table>
  );
}


type SymbolProps = {
  none?: boolean,
  name: string,
  desc?: string,
  link?: string,
  linkName?: string,
  autoLink?: boolean,
  noLink?: boolean,
  static?: boolean,
  constexpr?: boolean,
  const?: boolean,
  volatile?: boolean,
  virtual?: boolean,
  children?: React.ReactNode,
};

export function Symbol(props: SymbolProps) {

  const ctx = React.useContext(ClassContext);

  let nameElem = transformEmptyTagElem(props.name);

  let desc = null;
  if (props.desc)
    desc = props.desc;
  else if (props.children)
    desc = props.children;

  const hasLink = props.linkName || props.autoLink;
  const canBeLinked = !props.noLink && hasLink;

  if (canBeLinked)
    nameElem = <a href={props.link || `${(props.linkName || props.name)}`}>{nameElem}</a>;

  const mapAccess = props => {
    const a = readAccess(props);
    return (<span className={a.Style}>{a.ShortName}</span>);
  };

  const mapModifier = (testValue, style, content) => {
    switch (testValue) {
    case true: return <span className={styles[style]}>{content}</span>;
    default: return null;
    }
  };

  return (
    <tr>
      {!props.none && (
        <td className={styles.symbolProp}>
          {mapAccess(props)}
          {mapModifier(props.static, "modStatic", "static")}
          {mapModifier(props.constexpr, "modConstexpr", "constexpr")}
          {mapModifier(props.const, "modConst", "const")}
          {mapModifier(props.volatile, "modVolatile", "volatile")}
          {mapModifier(props.virtual, "modVirtual", "virtual")}
        </td>
      )}
      <td className={styles.symbolName}>
        {nameElem}
      </td>
      <td className={styles.symbolDesc}>
        {transformEmptyTagElem(desc)}
      </td>
    </tr>
  );
}

Symbol.isMDXComponent = true;
SymbolTable.isMDXComponent = true;

SymbolTable.Symbol = Symbol;
