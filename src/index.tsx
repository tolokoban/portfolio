import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/App"
import FontDosis from "./fonts/dosis"
import { Theme } from "./ui"
import "./index.css"

async function start() {
    await FontDosis.load()

    const theme = new Theme()
    theme.apply()
    const container = document.getElementById("app")
    if (!container) throw Error("Missing element with id #app!")
    createRoot(container).render(<App />)

    const splash = document.getElementById("splash")
    if (splash) {
        splash.classList.add("vanish")
        window.setTimeout(() => splash.parentNode?.removeChild(splash), 1000)
    }
}

start()
