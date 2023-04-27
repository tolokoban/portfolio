import React from "react"
import { Theme } from "../../theme"
import Classes from "./Button.module.css"
import { Circumference, OpaqueColorName } from "../../types"
import {
    DimensionStyleProps,
    styleDimension,
} from "../../theme/styles/dimension"
import {
    cssForColor,
    cssForColorOn,
    cssForGaps,
} from "../../theme/styles/styles"
import { CommonProps } from "../../theme/styles/common"

const $ = Theme.classNames

export type ViewButtonProps = {
    /**
     * The look of a button depends on its variant:
     *
     * * __filled__ (default): button ith background.
     * * __elevated__: with a shadow below.
     * * __outline__: no background but a surrounding border.
     * * __text__: text only, no background, no border.
     *
     * Default to `"filled"`.
     */
    variant?: "elevated" | "filled" | "outlined" | "text"
    /** Content of the button. Most often a text, but can be anything. */
    children: React.ReactNode
    onClick(this: void): void
    /**
     * Default to `true`.
     *
     * If set to `false`, the button cannot get the focus and cannot be clicked.
     */
    enabled?: boolean
    /**
     * Corners can be rounded with this prop.
     */
    borderRadius?: Circumference
    /**
     * If the button has a background (depending on `variant`) then `color` is
     * the color of this background and the text will be black or white depending
     * on the contrast ratio.
     *
     * For _text_ or _outlined_ buttons, `color` is the color of the text itself.
     */
    color?: OpaqueColorName
    /**
     * Margin can be overriden.
     *
     * Default to `["S", "M"]`.
     */
    margin?: Circumference
    /**
     * Padding can be overriden.
     *
     * Default to `[0, "M"]`.
     */
    padding?: Circumference
} & DimensionStyleProps &
    CommonProps

export function ViewButton({
    className,
    children,
    onClick,
    enabled = true,
    borderRadius = ".5em",
    color = "secondary-5",
    margin = ["S", "M"],
    padding = [0, "M"],
    width = "auto",
    height = "2em",
    variant: type = "elevated",
}: ViewButtonProps) {
    const style: React.CSSProperties = {
        "--custom-color-main-alpha": cssForColor(color, 0.5),
        "--custom-color-main": cssForColor(color),
        "--custom-color-text": cssForColorOn(color),
        margin: cssForGaps(margin),
        width,
        height,
        borderRadius: cssForGaps(borderRadius),
    }
    return (
        <button
            style={style}
            className={$.join(className, Classes.Button, Classes[type])}
            disabled={!enabled}
            type="button"
            onClick={onClick}
        >
            {(type === "filled" || type === "elevated") && (
                <div className={Classes.glow}></div>
            )}
            <div
                className={Classes.content}
                style={{
                    ...styleDimension({ width, height }),
                    borderRadius: cssForGaps(borderRadius),
                    padding: cssForGaps(padding),
                }}
            >
                {children}
            </div>
        </button>
    )
}

export function makeCustomButton(
    defaultProps: Partial<ViewButtonProps>
): (props: ViewButtonProps) => JSX.Element {
    return (props: ViewButtonProps) =>
        ViewButton({
            ...defaultProps,
            ...props,
        })
}
