import React from "react"
import EmptyPNG from "./empty.png"
import Style from "./Image.module.css"

export interface ImageProps {
    className?: string
    name: string
    alt: string
    size?: [width: number, height: number]
    onClick?(): void
    children?: React.ReactNode
}

export default function Image({
    className,
    name,
    alt,
    size = [640, 480],
    onClick,
    children,
}: ImageProps) {
    const ref = React.useRef<null | HTMLDivElement>(null)
    const inViewPort = useIsInViewPort(ref.current)
    const [width, height] = size
    const [loadedBlur, setLoadedBlur] = React.useState(false)
    const [loadedMini, setLoadedMini] = React.useState(false)
    const [fullscreen, setFullscreen] = React.useState(false)
    const [extension, setExtension] = React.useState("webp")
    const { protocol, host, pathname } = document.location
    const prefix = `${protocol}//${host}${pathname}images/`
    const src = `${prefix}${name}.${extension}`
    const srcBlur = `${prefix}${name}.blur.${extension}`
    const srcMini = `${prefix}${name}.mini.${extension}`
    const handleClick = () => {
        if (onClick) onClick()
        else setFullscreen(true)
    }
    const handleError = () => {
        console.error("Unable to load image:", src)
        if (extension !== "png") setExtension("png")
    }
    return (
        <div
            ref={ref}
            className={join(className, Style.Image)}
            style={{
                opacity: loadedBlur ? 1 : 0,
                width: `min(100%, ${width}px)`,
            }}
        >
            <div
                style={{
                    position: "static",
                    width: "100%",
                    height: 0,
                    paddingTop: `${(100 * height) / width}%`,
                }}
            ></div>
            <img
                src={inViewPort ? srcBlur : EmptyPNG}
                style={{ filter: "blur(24px)" }}
                alt={alt}
                width={width}
                height={height}
                onError={handleError}
                onLoad={() => setLoadedBlur(true)}
                onClick={handleClick}
            />
            {inViewPort && (
                <img
                    className={Style.Mini}
                    src={srcMini}
                    style={{ opacity: loadedMini ? 1 : 0 }}
                    alt={alt}
                    width={width}
                    height={height}
                    onError={handleError}
                    onLoad={() => setLoadedMini(true)}
                />
            )}
            {children && <footer>{children}</footer>}
            {!onClick && (
                <div
                    className={join(fullscreen || Style.hide)}
                    onClick={() => setFullscreen(false)}
                >
                    <img src={src} alt={alt} onError={handleError} />
                </div>
            )}
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function useIsInViewPort(current: HTMLDivElement | null) {
    const [isInViewport, setIsInViewport] = React.useState(false)
    React.useEffect(() => {
        if (!current) {
            setIsInViewport(false)
            return
        }

        const observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setIsInViewport(true)
                        break
                    }
                }
            },
            {
                threshold: 0.01,
            }
        )
        observer.observe(current)
        return () => observer.unobserve(current)
    }, [current])
    return isInViewport
}
