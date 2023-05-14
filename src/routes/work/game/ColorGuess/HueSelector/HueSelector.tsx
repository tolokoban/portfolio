import React from "react"
import Style from "./HueSelector.module.css"

export interface HueSelectorProps {
    className?: string
    value: number
    onChange(value: number): void
    steps: number
}

export default function HueSelector({ className, steps }: HueSelectorProps) {
    const background = React.useMemo(() => {
        return `linear-gradient(to right, ${range(steps)
            .map(
                (index) =>
                    `hsl(${Math.floor(
                        (360 * index) / (steps + 1)
                    )}deg 50% 100%)`
            )
            .join(", ")}, hsl(360 100% 50%))`
    }, [steps])
    console.log(background)
    return (
        <div
            className={join(className, Style.HueSelector)}
            style={{
                background,
            }}
        >
            <div></div>
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
