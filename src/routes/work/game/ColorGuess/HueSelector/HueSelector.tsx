import React from "react"
import Style from "./HueSelector.module.css"
import { clamp } from "@/webgl2/calc"
import { hue2percent, percent2hue, range, snapHue } from "./tools"

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
        console.log(
            "🚀 [HueSelector] steps, range(steps) = ",
            steps,
            range(steps)
        ) // @FIXME: Remove this line written on 2023-05-23 at 15:46
        return `linear-gradient(to right, ${range(steps)
            .map(
                (index) =>
                    `hsl(${Math.floor((360 * index) / steps)}deg 100% 50%)`
            )
            .join(", ")})`
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
        const hueStep = snapHue(360 / steps, steps)
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
