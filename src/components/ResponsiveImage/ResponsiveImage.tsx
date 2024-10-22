import React from "react";

import Styles from "./ResponsiveImage.module.css";

export interface ResponsiceImageProps {
  className?: string;
  png: string;
  webp: string;
  avif: string;
  pngMedium: string;
  webpMedium: string;
  avifMedium: string;
  pngSmall: string;
  webpSmall: string;
  avifSmall: string;
}

export default function ResponsiceImage(props: ResponsiceImageProps) {
  return (
    <picture className={join(props.className, Styles.responsiceimage)}>
      <source srcset={props.avif} />
      <source srcset={props.webp} />
      <source srcset={props.png} />
      <img src={props.pngSmall} />
    </picture>
  );
}

function join(...classes: unknown[]): string {
  return classes.filter((cls) => typeof cls === "string").join(" ");
}
