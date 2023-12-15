import React from "react"

import State from "@/state"
import EnglishFlagURL from "./en.png"
import FrenchFlagURL from "./fr.png"

import Styles from "./LanguageSelector.module.css"

export interface LanguageSelectorProps {
    className?: string
}

export default function LanguageSelector({ className }: LanguageSelectorProps) {
    const [lang, setLang] = State.language.useState()
    const french = lang.startsWith("fr")
    const handleLanguageSwitch = () => {
        setLang(french ? "en" : "fr")
    }
    return (
        <button
            className={join(className, Styles.languageselector)}
            type="button"
            onClick={handleLanguageSwitch}
        >
            <img src={french ? EnglishFlagURL : FrenchFlagURL} />
        </button>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
