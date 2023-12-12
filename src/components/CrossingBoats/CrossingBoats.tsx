import React from "react"
import Style from "./CrossingBoats.module.css"
import { makePainter } from "./painter"

export interface CrossingBoatsProps {
    className?: string
    speed?: number
    pause?: number
    tail?: number
}

export default function CrossingBoats({
    className,
    speed = 1,
    pause = 0,
    tail = 0,
}: CrossingBoatsProps) {
    const refCanvas = React.useRef<HTMLCanvasElement | null>(null)
    React.useEffect(() => {
        const canvas = refCanvas.current
        if (!canvas) return

        const painter = makePainter(canvas, speed, pause, tail)
        const observer = new ResizeObserver(painter)
        observer.observe(canvas)
        return () => observer.unobserve(canvas)
    }, [refCanvas.current, speed, pause])
    return (
        <canvas
            className={join(className, Style.CrossingBoats)}
            ref={refCanvas}
        ></canvas>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
