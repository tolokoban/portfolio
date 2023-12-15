import React from "react"

import Style from "./layout.module.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    const [opacityMini, setOpacityMini] = React.useState(0)
    React.useEffect(() => {
        const src = new Image()
        src.src = "splash.mini.jpg"
        src.onload = () => setOpacityMini(1)
    }, [])
    const [opacityFull, setOpacityFull] = React.useState(0)
    React.useEffect(() => {
        const src = new Image()
        src.src = "splash.jpg"
        src.onload = () => setOpacityFull(1)
    }, [])
    return (
        <div className={Style.splash}>
            <img src="splash.mini.png" style={{ opacity: opacityMini }} />
            <img src="splash.jpg" style={{ opacity: opacityFull }} />
            <div>{children}</div>
        </div>
    )
}
