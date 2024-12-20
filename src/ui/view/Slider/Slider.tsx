import React from "react"
import { Theme } from "../../theme"
import Style from "./Slider.module.css"
import { ViewWithValue } from "../../types"
import { useChangeableValue } from "../../hooks/changeable-value"

const $ = Theme.classNames

export type ViewSliderProps = ViewWithValue<number> & {
    className?: string
    /** If defined, displayed at the right of the slider. */
    text?: string | number | ((value: number) => string)
    wide?: boolean
    min?: number
    max?: number
    step?: number
}

export function ViewSlider({
    min,
    max,
    step,
    className,
    wide,
    text,
    value,
    onChange,
}: ViewSliderProps) {
    const [val, setVal] = useChangeableValue({ value, onChange })
    return (
        <div className={$.join(className, Style.Slider, wide ? "wide" : "")}>
            <input
                type="range"
                min={min ?? 0}
                max={max ?? 0}
                step={step ?? 1}
                value={val}
                onChange={(evt) => setVal(parseFloat(evt.target.value))}
            />
            {text && <div>{computeText(text, val)}</div>}
        </div>
    )
}

function computeText(
    text: string | number | ((value: number) => string),
    value: number
): React.ReactNode {
    if (typeof text === "string") return text
    if (typeof text === "number") return `${text}`
    return text(value)
}
