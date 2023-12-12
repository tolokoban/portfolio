import React from "react"
import { createRoot } from "react-dom/client"

import State from "@/state"

import App from "./app"
import FontDosis from "./fonts/dosis"
import { Theme } from "./ui"

import "./index.css"

async function start() {
    await FontDosis.load()

    const theme = new Theme()
    theme.apply()
    const container = document.getElementById("app")
    if (!container) throw Error("Missing element with id #app!")
    createRoot(container).render(<MainPage />)

    const splash = document.getElementById("splash")
    if (splash) {
        splash.classList.add("vanish")
        window.setTimeout(() => splash.parentNode?.removeChild(splash), 1000)
    }
}

function MainPage() {
    const lang = State.language.useValue()
    return <App lang={lang} />
}

start()
