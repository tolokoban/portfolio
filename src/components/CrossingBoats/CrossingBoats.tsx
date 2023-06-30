import React from "react"
import Style from "./CrossingBoats.module.css"

export interface CrossingBoatsProps {
    className?: string
    speed?: number
    pause?: number
}

export default function CrossingBoats({
    className,
    speed = 1,
    pause = 0,
}: CrossingBoatsProps) {
    const refCanvas = React.useRef<HTMLCanvasElement | null>(null)
    React.useEffect(() => {
        const canvas = refCanvas.current
        if (!canvas) return

        const painter = makePainter(canvas, speed, pause)
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

function makePainter(canvas: HTMLCanvasElement, speed: number, pause: number) {
    return () => {
        window.requestAnimationFrame(() => {
            const rect = canvas.getBoundingClientRect()
            const height = Math.ceil(rect.width * 0.4)
            if (height !== rect.height) {
                canvas.style.height = `${height}px`
                return
            }
            const { width } = rect
            canvas.width = width
            canvas.height = height
            const ctx = canvas.getContext("2d")
            if (!ctx) throw Error("Unable to create context 2D!")

            ctx.fillStyle = "#adf"
            ctx.fillRect(0, 0, width, height)
            const w = (pause * width) / 100
            const h = Math.floor(height / 12)
            const halfTrip = (width - w) / 2
            ctx.lineWidth = 3
            ctx.strokeStyle = "#d90"
            ctx.beginPath()
            ctx.moveTo(0, h)
            ctx.lineTo(halfTrip, height - h)
            ctx.lineTo(halfTrip + w, height - h)
            ctx.lineTo(width, h)
            ctx.stroke()
            ctx.strokeStyle = "#b70"
            ctx.beginPath()
            ctx.moveTo(0, height - h)
            ctx.lineTo(speed * halfTrip, h)
            ctx.lineTo(speed * halfTrip + w, h)
            ctx.lineTo(speed * halfTrip * 2 + w, height - h)
            ctx.stroke()
            // dessiner les rives.
            ctx.fillStyle = "#567"
            ctx.fillRect(0, 0, width, h)
            ctx.fillRect(0, height - h, width, h)
        })
    }
}
