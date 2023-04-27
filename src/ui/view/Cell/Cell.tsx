import React from "react"
import { Theme } from "../../theme"
import { CommonProps } from "../../theme/styles/common"
import Classes from "./Cell.module.css"

const $ = Theme.classNames

export type ViewCellProps = CommonProps & {
    /** Content of the grid cell. */
    children: React.ReactNode
    /**
     * [grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row) CSS property.
     */
    gridRow?: string
    /**
     * [grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) CSS property.
     */
    gridColumn?: string
    /**
     * [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) CSS property.
     */
    alignSelf?:
        | "auto"
        | "normal"
        | "center"
        | "start"
        | "end"
        | "self-start"
        | "self-end"
        | "flex-start"
        | "flex-end"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "stretch"
        | "safe center"
        | "unsafe center"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
    /**
     * [justify-self](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self) CSS property.
     */
    justifySelf?:
        | "auto"
        | "normal"
        | "stretch"
        | "center"
        | "start"
        | "end"
        | "flex-start"
        | "flex-end"
        | "self-start"
        | "self-end"
        | "left"
        | "right"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "safe center"
        | "unsafe center"
        | "inherit"
        | "initial"
        | "revert"
        | "revert-layer"
        | "unset"
}

export function ViewCell({
    className,
    children,
    gridRow,
    gridColumn,
    alignSelf,
    justifySelf,
}: ViewCellProps) {
    const style: React.CSSProperties = {
        gridRow,
        gridColumn,
        alignSelf,
        justifySelf,
    }
    return (
        <div className={$.join(className, Classes.Cell)} style={style}>
            {children}
        </div>
    )
}
