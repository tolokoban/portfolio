import React from "react"

import { IconBrandGithub, IconMail } from "@/ui"
import { useLangValue } from "@/hooks/lang"

import styles from "./layout.module.css"

export default function LayoutCV({ children }: { children: React.ReactNode }) {
    const lang = useLangValue()
    const tr = TRANSLATIONS[lang] ?? EN
    const handleEMailAddress = (a: HTMLAnchorElement | null) => {
        if (!a) return

        a.setAttribute("href", "mailto:" + ["info", "tolokoban.org"].join("@"))
    }
    return (
        <div className={styles.main}>
            <div>
                <header>
                    <div>Fabien PETITJEAN</div>
                    <a href="mailto:antispam" ref={handleEMailAddress}>
                        <IconMail />
                        <div>{tr.email}</div>
                    </a>
                    <a href="https://github.com/tolokoban">
                        <IconBrandGithub />
                        <div>GitHub</div>
                    </a>
                </header>
                <h1>
                    Developer Fullstack
                    <br />
                    Visualization engineer
                    <br />
                    <small>
                        <a href="#/">( Look at my portfolio )</a>
                    </small>
                </h1>
                {children}
                <hr />
                <p>
                    <a href="#/">Back to portfolio</a>.
                </p>
            </div>
        </div>
    )
}

const FR = {
    email: "Addresse mail",
}

const EN: typeof FR = {
    email: "EMail address",
}

const TRANSLATIONS: Record<string, typeof FR> = {
    fr: FR,
    en: EN,
}
