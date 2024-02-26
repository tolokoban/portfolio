import React from "react"
import Vignettes from "../Vignettes"
import Style from "./Welcome.module.css"

export interface WelcomeProps {
    className?: string
}

const TROMBINE = "images/trombine/trombine.webp"

export default function Welcome({ className }: WelcomeProps) {
    const [hint, setHint] = React.useState(true)
    const [trombineOpacity, setTrombineOpacity] = React.useState(0)
    React.useEffect(() => {
        const img = new Image()
        img.src = TROMBINE
        img.onload = () => setTrombineOpacity(1)
    })
    return (
        <div className={join(className, Style.Welcome)}>
            <img
                className={Style.trombine}
                src={TROMBINE}
                style={{ opacity: trombineOpacity }}
            />
            <section onScroll={() => setHint(false)}>
                <header>
                    <a href="#/contact">
                        <svg
                            version="1.1"
                            viewBox="-50 -20 100 40"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid meet"
                            style={{
                                font: "16px sans-serif",
                            }}
                        >
                            <g textAnchor="middle" dominantBaseline="middle">
                                <text fill="currentColor">Tolokoban</text>
                            </g>
                        </svg>
                    </a>
                </header>
                <Vignettes
                    prefix="work/articles"
                    images={[
                        "Motor",
                        "Minervois",
                        "Fern",
                        "Akonolinga",
                        "Fredo50",
                        "FrancaisFacile",
                        "Danatia",
                        "MediationFamilliale",
                        "VoughtTower",
                        "HandsOnWebGL",
                        "TrailTar",
                        "SnowRobots",
                        "ApiHrGraph",
                        "Tournus",
                    ]}
                />
                <article>
                    <a href="#/contact">Contact</a>
                </article>
            </section>
            {hint && (
                <nav>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="100%"
                        width="100%"
                        version="1.1"
                        viewBox="-50 -50 100 100"
                        preserveAspectRatio="xMidYMid"
                    >
                        <defs>
                            <path id="triangle" d="M0,0l20,-20h-40z" />
                        </defs>
                        <g fill="currentcolor">
                            <use href="#triangle" y="-22" opacity="0.11" />
                            <use href="#triangle" opacity="0.33" />
                            <use href="#triangle" y="22" />
                        </g>
                    </svg>
                </nav>
            )}
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
