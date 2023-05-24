import React from "react"
import { clamp } from "@/webgl2/calc"
import { value2percent, percent2value, range, snapValue } from "./tools"
import Color from "@/ui/color"
import Style from "./ColorAttributeSelector.module.css"

export interface ColorAttributeSelectorProps {
    className?: string
    /**
     * Integer between 0 and `maxValue` (included).
     */
    value: number
    maxValue: number
    onChange(value: number): void
    steps: number
    minStep: number
    maxStep: number
    /**
     * A function that creates a CSS color from the `value`.
     * Example:
     * ```
     * value => `hsl(${value} 100% 50%)`
     * ```
     */
    makeColor(value: number): string
}

export default function ColorAttributeSelector({
    className,
    steps,
    minStep,
    maxStep,
    value,
    maxValue,
    onChange,
    makeColor,
}: ColorAttributeSelectorProps) {
    const gradient = `linear-gradient(to right, ${range(steps)
        .map((index) => makeColor(Math.floor(((maxValue + 1) * index) / steps)))
        .join(", ")})`
    const handlePointerEvent = (evt: React.PointerEvent<HTMLDivElement>) => {
        const div = evt.target as HTMLDivElement
        if (!div) return

        evt.preventDefault()
        evt.stopPropagation()
        const rect = div.getBoundingClientRect()
        const percent = clamp((evt.clientX - rect.left) / rect.width)
        const hue = percent2value(percent, maxValue, steps, minStep, maxStep)
        onChange(hue)
    }
    function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
        const hueStep = snapValue(
            (maxValue + 1) / steps,
            maxValue,
            steps,
            minStep,
            maxStep
        )
        if (event.key === "ArrowRight") {
            onChange((value + hueStep) % (maxValue + 1))
        } else if (event.key === "ArrowLeft") {
            onChange((value + (maxValue + 1) - hueStep) % (maxValue + 1))
        } else {
        }
    }
    return (
        <div
            className={join(className, Style.ColorAttributeSelector)}
            tabIndex={0}
            onPointerDown={handlePointerEvent}
            onPointerMove={handlePointerEvent}
            onKeyDown={handleKeyDown}
            style={{
                background: gradient,
            }}
        >
            <div
                style={{
                    left: `${
                        100 *
                        value2percent(value, maxValue, steps, minStep, maxStep)
                    }%`,
                    background: makeColor(value),
                    "--custom-shadow": isDark(makeColor(value))
                        ? "#fff"
                        : "#000",
                }}
            ></div>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function isDark(hsl: string) {
    const color = new Color(hsl)
    return color.isDark()
}
