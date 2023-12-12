import React from "react"
import ColorAttributeSelector from "../ColorAttributeSelector/ColorAttributeSelector"

export interface LumSelectorProps {
    className?: string
    /** Color hue between 0 and 359 (included). */
    hue: number
    /**
     * Integer between 0 and 99 (included).
     */
    value: number
    onChange(value: number): void
    steps: number
}

export default function SatSelector(props: LumSelectorProps) {
    return (
        <ColorAttributeSelector
            {...props}
            makeColor={(lum) => `hsl(${props.hue} 100% ${lum}%)`}
            maxValue={99}
            minStep={1}
            maxStep={props.steps - 2}
        />
    )
}
