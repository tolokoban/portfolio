import React from "react"
import Style from "./HueSelector.module.css"
import { clamp } from "@/webgl2/calc"

export interface HueSelectorProps {
    className?: string
    /**
     * Integer between 0 and 359 (included).
     */
    value: number
    onChange(value: number): void
    steps: number
}

export default function HueSelector({
    className,
    steps,
    value,
    onChange,
}: HueSelectorProps) {
    const background = React.useMemo(() => {
        return `linear-gradient(to right, ${range(steps)
            .map(
                (index) =>
                    `hsl(${Math.floor((360 * index) / steps)}deg 100% 50%)`
            )
            .join(", ")}, hsl(360 100% 50%))`
    }, [steps])
    const handlePointerEvent = (evt: React.PointerEvent<HTMLDivElement>) => {
        const div = evt.target as HTMLDivElement
        if (!div) return

        evt.preventDefault()
        evt.stopPropagation()
        const rect = div.getBoundingClientRect()
        const percent = clamp((evt.clientX - rect.left) / rect.width)
        const hue = percent2hue(percent, steps)
        console.log("🚀 [HueSelector] hue = ", hue) // @FIXME: Remove this line written on 2023-05-23 at 13:40
        onChange(hue)
    }
    function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
        const hueStep = snapHue(359 / steps, steps)
        if (event.key === "ArrowRight") {
            onChange((value + hueStep) % 360)
        } else if (event.key === "ArrowLeft") {
            onChange((value + 360 - hueStep) % 360)
        } else {
            console.log("🚀 [HueSelector] event.key = ", event.key) // @FIXME: Remove this line written on 2023-05-23 at 15:05
        }
    }

    return (
        <div
            className={join(className, Style.HueSelector)}
            tabIndex={0}
            onPointerDown={handlePointerEvent}
            onPointerMove={handlePointerEvent}
            onKeyDown={handleKeyDown}
            style={{
                background,
            }}
        >
            <div
                style={{
                    left: `${100 * hue2percent(value, steps)}%`,
                    background: `hsl(${value} 100% 50%)`,
                }}
            ></div>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function range(size: number): number[] {
    const result: number[] = []
    for (let i = 0; i < size; i++) result.push(i)
    return result
}

/**
 * Let's imagine `steps === 6` then you will have this relations:
 * ```
 * | Step | 0 |  1 |   2 |   3 |   4 |   5 |
 * | Hue  | 0 | 60 | 120 | 180 | 240 | 300 |
 * | %    | 0 | 20 |  40 |  60 |  80 | 100 |
 * ```
 * @param hue Integer between 0 and 359 (included).
 * @param steps Number of steps to snap on.
 * @return Float between 0 and 1 (included).
 */
function hue2percent(hue: number, steps: number): number {
    const maxHue = Math.floor((360 * (steps - 1)) / steps)
    const clampedHue = clamp(hue, 0, maxHue)
    return clampedHue / maxHue
}

function percent2hue(percent: number, steps: number): number {
    const maxHue = Math.floor((360 * (steps - 1)) / steps)
    const snappedPercent = Math.floor(percent * (steps - 1)) / (steps - 1)
    return Math.round(snappedPercent * maxHue)
}

function snapHue(hue: number, steps: number): number {
    return percent2hue(hue2percent(hue, steps), steps)
}
