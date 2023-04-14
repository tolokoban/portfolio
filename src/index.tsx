import React from "react"
import { createRoot } from "react-dom/client"
import App from "./components/App"
import { sleep } from "./utils/sleep"
import "./fonts/dosis.css"
import "./index.css"

async function start() {
    const container = document.getElementById("app")
    if (!container) throw Error("Missing element with id #app!")
    createRoot(container).render(<App />)

    // await sleep(1000)
    const splash = document.getElementById("splash")
    if (splash) {
        splash.classList.add("vanish")
        window.setTimeout(() => splash.parentNode?.removeChild(splash), 1000)
    }
}

start()
