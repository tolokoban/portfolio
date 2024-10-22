import React from "react"

import Styles from "./ResponsiveImage.module.css"

export interface ResponsiveImageCoreProps {
    className?: string
    color?: string
    type?: "background" | "vignette" | "normal"
    size?: [width: number, height: number]
}

export interface ResponsiveImageProps extends ResponsiveImageCoreProps {
    png: string
    avif: string
    pngMedium: string
    avifMedium: string
    pngSmall: string
    avifSmall: string
}

export default function ResponsiceImage(props: ResponsiveImageProps) {
    const typeClassName = Styles[props.type ?? "normal"]
    return (
        <div
            className={join(
                props.className,
                Styles.responsiveimage,
                typeClassName
            )}
            style={{
                background: props.color ?? "transparent",
                aspectRatio: props.size
                    ? `${props.size[0]} / ${props.size[1]}`
                    : "1",
            }}
        >
            <picture>
                <source srcSet={props.avif} />
                <source srcSet={props.png} />
                <img src={props.pngSmall} />
            </picture>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter(cls => typeof cls === "string").join(" ")
}
