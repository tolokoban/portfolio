import React from "react"
import { Theme } from "../../theme"
import Style from "./Tab.module.css"

const $ = Theme.classNames

export interface ViewTabProps {
    className?: string
    label: string | JSX.Element
    children: React.ReactNode
}

export function ViewTab({ className, children }: ViewTabProps) {
    return <div className={$.join(className, Style.Tab)}>{children}</div>
}
