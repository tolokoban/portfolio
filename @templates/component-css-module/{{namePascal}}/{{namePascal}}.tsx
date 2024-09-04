import React from "react"

import Styles from "./{{namePascal}}.module.css"

export interface {{namePascal}}Props {
    className?: string
}

export default function {{namePascal}}({ className }: {{namePascal}}Props) {
    return <div className={join(className, Styles.{{nameCamel}})}>
    {{name}}
    </div>
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
