import React from "react";

import { ResponsiveImageCoreProps } from "../ResponsiveImage";

import styles from "./Vignette.module.css";

export interface VignetteProps {
  className?: string;
  image: (props: ResponsiveImageCoreProps) => React.ReactNode;
  href: string;
}

export default function Vignette({
  className,
  href,
  image: Image,
}: VignetteProps) {
  console.log("🚀 [Vignette] styles = ", styles); // @FIXME: Remove this line written on 2024-10-24 at 11:01
  return (
    <a className={join(className, styles.vignette)} href={href}>
      <Image type="vignette" />
    </a>
  );
}

function join(...classes: unknown[]): string {
  return classes.filter((cls) => typeof cls === "string").join(" ");
}
