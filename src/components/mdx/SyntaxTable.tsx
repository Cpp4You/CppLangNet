import React from "react";

import transformEmptyTagElem from "@site/src/helper/TransformEmptyTagElem";

import styles from "./SyntaxTable.module.scss";

type SyntaxTableProps = {
  children?: React.ReactNode;
};

export default function SyntaxTable(props: SyntaxTableProps) {
  return (
    <table className={styles.syntaxTable}>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}

type ArgsProps = {
  args: React.ReactNode[];
};

function Args({ args }: ArgsProps) {
  return (
    <div>
      {args.map((arg, index) => (
        <td key={`${index}`} className={styles.argument}>{arg}</td>
      ))}
    </div>
  );
}

type SyntaxProps = {
  directive: string,
  id?: string,
  args?: React.ReactNode[],
};

export function Syntax(props: SyntaxProps) {
  const directive = transformEmptyTagElem(props.directive);
  const args = props.args ?? [];

  return (
    <tr>
      <td className={styles.id}>
        {props.id ?? null}
      </td>
      <td className={styles.directive}>
        {directive}
      </td>
      <td className={styles.args}>
        <Args args={args} />
      </td>
    </tr>
  );
}

Syntax.isMDXComponent = true;
SyntaxTable.isMDXComponent = true;
SyntaxTable.Syntax = Syntax;