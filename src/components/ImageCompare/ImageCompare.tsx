import React from "react"

import Styles from "./ImageCompare.module.css"

export interface ImageCompareProps {
    className?: string
    size: [width: number, height: number]
    images: [img1: string, img2: string]
    path: string
    anim?: "swipe" | "fade"
}

export default function ImageCompare({
    className,
    size: [width, height],
    images: [name1, name2],
    path,
    anim = "swipe",
}: ImageCompareProps) {
    const { protocol, host, pathname } = document.location
    const prefix = `${protocol}//${host}${pathname}images/${sanitize(path)}/`
    return (
        <div className={join(className, Styles.imagecompare)}>
            <div
                style={{
                    width: `min(100%, ${width}px)`,
                }}
            >
                <div
                    style={{
                        width: `100%`,
                        padding: `0 0 ${(100 * height) / width}% 0`,
                    }}
                ></div>
                <picture>
                    <source srcSet={`${prefix}${name1}.webp`} />
                    <img src={`${prefix}${name1}.png`} />
                </picture>
                <picture className={Styles[`anim-${anim}`]}>
                    <source srcSet={`${prefix}${name2}.webp`} />
                    <img src={`${prefix}${name2}.png`} />
                </picture>
            </div>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function sanitize(path: string) {
    return path
        .split("/")
        .filter((item) => typeof item === "string" && item.trim().length > 0)
        .join("/")
}
