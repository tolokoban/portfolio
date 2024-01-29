import React from "react"

import Styles from "./LocalImage.module.css"

export interface LocalImageProps {
    className?: string
    src: string
}

export default function LocalImage({ className, src }: LocalImageProps) {
    return <img className={join(className, Styles.localimage)} src={src} />
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
