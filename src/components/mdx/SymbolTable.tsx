import React from "react";

import transformEmptyTagElem from "@site/src/helper/TransformEmptyTagElem";

import styles from "./SymbolTable.module.scss";

import { ClassContext } from "./ClassContext";

type AccessDesc = {
  Order: number,
  ShortName: string,
  FullName: string,
  Style: string,
};

type AvailableAccessSpecs = "None" | "Public" | "Protected" | "Private";

type AccessSpec = {
  [key in AvailableAccessSpecs]: AccessDesc;
};

export const Access: AccessSpec = {
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

type SymbolAccessProps = {
  none?: boolean,
  pub?: boolean,
  public?: boolean,
  prot?: boolean,
  protected?: boolean,
  priv?: boolean,
  private?: boolean,
};

function readAccess(props: SymbolAccessProps) {
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

function compareOrder(l: React.ReactElement<SymbolAccessProps>, r: React.ReactElement<SymbolAccessProps>): number {
  if (typeof l !== "object" || typeof r !== "object")
    return 0;

  return readAccess(l as unknown as SymbolAccessProps).Order - readAccess(r as unknown as SymbolAccessProps).Order;
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

type SymbolModifierKeyNames = "static" | "constexpr" | "const" | "volatile" | "virtual";

type WithSymbolModifiers = {
  [key in SymbolModifierKeyNames]?: boolean;
}

type SymbolProps = WithSymbolModifiers & {
  none?: boolean,
  name: string,
  desc?: string,
  link?: string,
  linkName?: string,
  autoLink?: boolean,
  noLink?: boolean,
  children?: React.ReactNode,
};

type SymbolModifierDesc = {
  keyName: SymbolModifierKeyNames,
  label: string,
  styleName: string,
};

const SYMBOL_MODIFIER_LIST: SymbolModifierDesc[] = [
  {
    keyName: "static",
    label: "static",
    styleName: "modStatic",
  },
  {
    keyName: "constexpr",
    label: "constexpr",
    styleName: "modConstexpr",
  },
  {
    keyName: "const",
    label: "const",
    styleName: "modConst",
  },
  {
    keyName: "volatile",
    label: "volatile",
    styleName: "modVolatile",
  },
  {
    keyName: "virtual",
    label: "virtual",
    styleName: "modVirtual",
  },
];

export function Symbol(props: SymbolProps) {

  // const ctx = React.useContext(ClassContext);

  let nameElem = transformEmptyTagElem(props.name);

  let desc = null;
  if (props.desc) {
    desc = props.desc;
  }
  else if (props.children) {
    desc = props.children;
  }

  const hasLink = props.linkName || props.autoLink;
  const canBeLinked = !props.noLink && hasLink;

  if (canBeLinked) {
    nameElem = <a href={props.link || `${(props.linkName || props.name)}`}>{nameElem}</a>;
  }

  return (
    <tr>
      {!props.none && (
        <td className={styles.symbolProp}>
          <SymbolAccess {...props} />
          <SymbolModifiers {...props} />
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


function SymbolModifiers(props: WithSymbolModifiers) {
  const modifiers = SYMBOL_MODIFIER_LIST.map((desc) => {
    if (!props[desc.keyName]) {
      return null;
    }
    return (
      <SymbolModifier
        key={desc.keyName}
        label={desc.label}
        styleName={desc.styleName}
      />
    );
  });

  return (
    <>
      {modifiers}
    </>
  );
}

type SymbolModifierProps = {
  label: string;
  styleName: string;
}

function SymbolModifier(props: SymbolModifierProps) {
  return (
    <span className={styles[props.styleName]}>
      {props.label}
    </span>
  );
}

function SymbolAccess(props: SymbolAccessProps) {
  const a = readAccess(props);
  return (
    <span className={a.Style}>{a.ShortName}</span>
  );
}