import React from "react"
import ColorAttributeSelector from "../ColorAttributeSelector/ColorAttributeSelector"

export interface HueSelectorProps {
    className?: string
    /**
     * Integer between 0 and 359 (included).
     */
    value: number
    onChange(value: number): void
    steps: number
}

export default function HueSelector(props: HueSelectorProps) {
    return (
        <ColorAttributeSelector
            {...props}
            makeColor={(hue) => `hsl(${hue} 100% 50%)`}
            maxValue={359}
            minStep={0}
            maxStep={props.steps - 2}
        />
    )
}
