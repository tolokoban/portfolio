import React from "react"

import Styles from "./Contact.module.css"

export interface ContactProps {
    className?: string
    children: React.ReactNode
}

export default function Contact({ className, children }: ContactProps) {
    const [href, setHref] = React.useState("")
    React.useEffect(() => {
        const mail = ["org", ".", "tolokoban", "@", "contact"]
            .reverse()
            .join("")
        setHref(`mailto:${mail}`)
    }, [])
    return (
        <a href={href} className={join(className, Styles.contact)}>
            {children}
        </a>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
