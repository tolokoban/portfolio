import React from "react"

import Styles from "./Logos.module.css"

export interface LogosProps {
    className?: string
    logos: Record<string, string>
}

export default function Logos({ className, logos }: LogosProps) {
    return (
        <div className={join(className, Styles.logos)}>
            {Object.keys(logos).map((src) => (
                <a key={src} href={logos[src]}>
                    <img src={src} alt={logos[src]} width="300" height="200" />
                </a>
            ))}
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
