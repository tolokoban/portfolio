type Point = [x: number, y: number]
type Segment = [pointA: Point, pointB: Point]

export function makePainter(
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
            const margin = Math.floor(height / 12)
            const halfTrip = (width - w) / 2
            const fastAx = 0
            const fastAy = margin
            const fastBx = halfTrip
            const fastBy = height - margin
            const fastCx = fastBx + w
            const fastCy = height - margin
            const fastDx = fastCx + halfTrip
            const fastDy = margin
            const fastSegment1: Segment = [
                [fastAx, fastAy],
                [fastBx, fastBy],
            ]
            const fastSegment2: Segment = [
                [fastCx, fastCy],
                [fastDx, fastDy],
            ]
            ctx.lineWidth = 3
            ctx.strokeStyle = "#d90"
            ctx.beginPath()
            ctx.moveTo(fastAx, fastAy)
            ctx.lineTo(fastBx, fastBy)
            ctx.lineTo(halfTrip + w, height - margin)
            ctx.lineTo(width, margin)
            ctx.stroke()
            const segments: Segment[] = []
            let x = 0
            ctx.strokeStyle = "#b70"
            while (x < width) {
                const slowAx = x
                const slowAy = height - margin
                ctx.beginPath()
                ctx.moveTo(slowAx, slowAy)
                x += speed * halfTrip
                const slowBx = x
                const slowBy = margin
                ctx.lineTo(slowBx, slowBy)
                x += w
                const slowCx = x
                const slowCy = margin
                ctx.lineTo(slowCx, slowCy)
                x += speed * halfTrip
                const slowDx = x
                const slowDy = height - margin
                ctx.lineTo(slowDx, slowDy)
                x += w
                ctx.stroke()
                segments.push(
                    [
                        [slowAx, slowAy],
                        [slowBx, slowBy],
                    ],
                    [
                        [slowCx, slowCy],
                        [slowDx, slowDy],
                    ]
                )
            }
            // Premiere rencontre.
            const shore = [margin, height - margin]
            let shoreIndex = 0
            for (const segment of segments) {
                const meet = findIntersection(fastSegment1, segment)
                if (!meet) continue

                dot(ctx, meet, shore[shoreIndex], height - 2 * margin)
                shoreIndex = 1 - shoreIndex
            }
            for (const segment of segments) {
                const meet = findIntersection(fastSegment2, segment)
                if (!meet) continue

                dot(ctx, meet, shore[shoreIndex], height - 2 * margin)
                shoreIndex = 1 - shoreIndex
            }
            // Dessiner les rives.
            ctx.fillStyle = "#567"
            ctx.fillRect(0, 0, canvas.width, margin)
            ctx.fillRect(0, height - margin, canvas.width, margin)
        })
    }
}

function dot(
    ctx: CanvasRenderingContext2D,
    [x, y]: Point,
    y0: number,
    h: number
) {
    ctx.fillStyle = "#000"
    ctx.beginPath()
    ctx.ellipse(x, y, 5, 5, 0, 0, 2 * Math.PI)
    ctx.fill()
    ctx.save()
    ctx.lineWidth = 1
    ctx.strokeStyle = "#000"
    ctx.setLineDash([2, 2])
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x, y0)
    ctx.stroke()
    ctx.font = "16px sans-serif"
    const text = `${((100 * Math.abs(y - y0)) / h).toFixed(1)}%`
    ctx.fillText(text, x + 16, y + 4)
    ctx.restore()
}

function findIntersection(segmentA: Segment, segmentB: Segment): Point | null {
    const [[ax0, ay0], [ax1, ay1]] = segmentA
    const [[bx0, by0], [bx1, by1]] = segmentB
    const Dax = ax1 - ax0
    const Day = ay1 - ay0
    const Dbx = bx1 - bx0
    const Dby = by1 - by0
    // prettier-ignore
    const x = (
        (by0 - ay0)*Dax*Dbx
        + ax0*Day*Dbx
        - bx0*Dax*Dby
    ) / (
        Day*Dbx - Dax*Dby
    )
    if (x < ax0 || x < bx0 || x > ax1 || x > bx1) return null

    const y = ay0 + ((x - ax0) * Day) / Dax
    return [x, y]
}
