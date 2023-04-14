import React from "react"
import Style from "./Image.module.css"

export interface ImageProps {
    className?: string
    name: string
    alt: string
    children?: React.ReactNode
}

export default function Image({ className, name, alt, children }: ImageProps) {
    const [loaded, setLoaded] = React.useState(false)
    const [fullscreen, setFullscreen] = React.useState(false)
    const [extension, setExtension] = React.useState("webp")
    const prefix = `${window.location.protocol}//${window.location.host}/images/`
    const src = `${prefix}${name}.${extension}`
    const handleError = () => {
        console.error("Unable to load image:", src)
        if (extension !== "png") setExtension("png")
    }
    return (
        <div
            className={join(className, Style.Image)}
            style={{
                opacity: loaded ? 1 : 0,
            }}
        >
            <img
                src={src}
                alt={alt}
                onError={handleError}
                onLoad={() => setLoaded(true)}
                onClick={() => setFullscreen(true)}
            />
            {children && <footer>{children}</footer>}
            <div
                className={join(fullscreen || Style.hide)}
                onClick={() => setFullscreen(false)}
            >
                <img src={src} alt={alt} onError={handleError} />
            </div>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
