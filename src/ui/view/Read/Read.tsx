import React from "react"
import { Theme } from "../../theme"
import Style from "./Read.module.css"

const $ = Theme.classNames

export interface ViewReadProps {
    className?: string
    children: React.ReactNode
}

export function ViewRead({ className, children }: ViewReadProps) {
    return <div className={$.join(className, Style.Read)}>{children}</div>
}
