import React from "react"
import Style from "./AntiSpoil.module.css"

export interface AntiSpoilProps {
    className?: string
    children: React.ReactNode
}

export default function AntiSpoil({ className, children }: AntiSpoilProps) {
    return (
        <div className={join(className, Style.AntiSpoil, "full-width")}>
            {children}
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
