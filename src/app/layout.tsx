import React from "react"

import Background from "@/generated/backgrounds/pink-splash-wide"

import Style from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    const [opacityMini, setOpacityMini] = React.useState(0)
    React.useEffect(() => {
        const src = new Image()
        src.src = "splash.full.mini.jpg"
        src.onload = () => setOpacityMini(1)
    }, [])
    const [opacityFull, setOpacityFull] = React.useState(0)
    React.useEffect(() => {
        const src = new Image()
        src.src = "splash.full.jpg"
        src.onload = () => setOpacityFull(1)
    }, [])
    return (
        <div className={Style.splash}>
            <Background type="background" />
            {/* <img src="splash.full.mini.jpg" style={{ opacity: opacityMini }} />
            <img src="splash.full.jpg" style={{ opacity: opacityFull }} /> */}
            <div>{children}</div>
        </div>
    )
}
