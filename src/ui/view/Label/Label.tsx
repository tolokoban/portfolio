import React from "react"
import { Theme } from "../../theme"
import Style from "./Label.module.css"
import { ColorName } from "../../types"
import { CommonProps } from "../../theme/styles/common"

const $ = Theme.classNames

export type ViewLabelProps = CommonProps & {
    /** Text to display as label. */
    value?: string
    /** Tooltip */
    title?: string
    /** Color of the label. Default to `currentColor`. */
    color?: ColorName
    /**
     * Content this label describes.
     * When the label is clicked, the content will get focus.
     */
    children?: React.ReactNode
}

export function ViewLabel({
    color,
    className,
    value,
    title,
    children,
}: ViewLabelProps): JSX.Element {
    const id = `labelled/${React.useId()}`
    if (!value) return <>{children}</>

    const style: React.CSSProperties = {}
    if (color) style.color = `var(--theme-color-${color})`
    return (
        <>
            <label
                htmlFor={id}
                title={title}
                className={$.join(className, Style.Label)}
                style={style}
            >
                {value}
            </label>
            <div id={id} className={Style.LabelContent}>
                {children}
            </div>
        </>
    )
}
