import React from "react"
import Style from "./CrossingBoats.module.css"

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

function makePainter(
    canvas: HTMLCanvasElement,
    speed: number,
    pause: number,
    tail: number
) {
    return () => {
        window.requestAnimationFrame(() => {
            const rect = canvas.getBoundingClientRect()
            const height = Math.ceil(rect.width * 0.4)
            if (height !== rect.height) {
                canvas.style.height = `${height}px`
                return
            }
            let { width } = rect
            canvas.width = width
            canvas.height = height
            const ctx = canvas.getContext("2d")
            if (!ctx) throw Error("Unable to create context 2D!")

            ctx.fillStyle = "#adf"
            ctx.fillRect(0, 0, width, height)
            const w = (pause * width) / 100
            if (tail > 0) width -= (tail * width) / 100
            const h = Math.floor(height / 12)
            const halfTrip = (width - w) / 2
            const fastAx = 0
            const fastAy = h
            const fastBx = halfTrip
            const fastBy = height - h
            ctx.lineWidth = 3
            ctx.strokeStyle = "#d90"
            ctx.beginPath()
            ctx.moveTo(fastAx, fastAy)
            ctx.lineTo(fastBx, fastBy)
            ctx.lineTo(halfTrip + w, height - h)
            ctx.lineTo(width, h)
            ctx.stroke()
            let x = 0
            ctx.strokeStyle = "#b70"
            while (x < width) {
                ctx.beginPath()
                ctx.moveTo(x, height - h)
                x += speed * halfTrip
                ctx.lineTo(x, h)
                x += w
                ctx.lineTo(x, h)
                x += speed * halfTrip
                ctx.lineTo(x, height - h)
                x += w
                ctx.stroke()
            }
            // Premiere rencontre.
            const meet1 = speed / (1 + speed)
            const meet1x = fastAx + (fastBx - fastAx) * meet1
            const meet1y = fastAy + (fastBy - fastAy) * meet1
            ctx.fillStyle = "#000"
            ctx.beginPath()
            ctx.ellipse(meet1x, meet1y, 5, 5, 0, 0, 2 * Math.PI)
            ctx.fill()
            ctx.save()
            ctx.lineWidth = 1
            ctx.strokeStyle = "#000"
            ctx.setLineDash([2, 2])
            ctx.beginPath()
            ctx.moveTo(meet1x, fastAy)
            ctx.lineTo(meet1x, meet1y)
            ctx.stroke()
            ctx.font = "16px sans-serif"
            const text = `${(100 * meet1).toFixed(1)}%`
            ctx.fillText(text, meet1x + 16, meet1y + 4)
            ctx.restore()
            // Dessiner les rives.
            ctx.fillStyle = "#567"
            ctx.fillRect(0, 0, canvas.width, h)
            ctx.fillRect(0, height - h, canvas.width, h)
        })
    }
}
