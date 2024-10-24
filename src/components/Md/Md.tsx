import React from "react";
import Markdown from "markdown-to-jsx";

import styles from "./Md.module.css";

export interface MdProps {
  className?: string;
  children: string;
}

export default function Md({ className, children }: MdProps) {
  return <Markdown className={join(className, styles.md)}>{children}</Markdown>;
}

function join(...classes: unknown[]): string {
  return classes.filter((cls) => typeof cls === "string").join(" ");
}
