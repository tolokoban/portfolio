import React from "react"
import Style from "./HueSelector.module.css"

export interface HueSelectorProps {
    className?: string
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
                    `hsl(${Math.floor(
                        (360 * index) / (steps + 1)
                    )}deg 100% 50%)`
            )
            .join(", ")}, hsl(360 100% 50%))`
    }, [steps])
    const handlePointerEvent = (evt: React.PointerEvent<HTMLDivElement>) => {
        const div = evt.target as HTMLDivElement
        if (!div) return

        const rect = div.getBoundingClientRect()
        const x = (evt.clientX - rect.left) / rect.width
        const hue = Math.max(
            0,
            Math.min(steps + 1, Math.floor(x * (steps + 1)))
        )
        onChange(hue)
    }
    return (
        <div
            className={join(className, Style.HueSelector)}
            onPointerDown={handlePointerEvent}
            onPointerMove={handlePointerEvent}
            style={{
                background,
            }}
        >
            <div
                style={{
                    left: `${(100 * value) / (steps + 1)}%`,
                    background: `hsl(${(360 * value) / (steps + 1)} 100% 50%)`,
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
