import React from "react"
import Vignettes from "../Vignettes"
import Style from "./Welcome.module.css"

export interface WelcomeProps {
    className?: string
}

const TROMBINE = "images/trombine/trombine.webp"

export default function Welcome({ className }: WelcomeProps) {
    const [section, setSection] = React.useState("gfx")
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
                <div className={Style.switch}>
                    <div>
                        <button
                            className={join(
                                section === "gfx" && Style.switchOn
                            )}
                            onClick={() => setSection("gfx")}
                        >
                            Grafix
                        </button>
                        <button
                            className={join(
                                section === "code" && Style.switchOn
                            )}
                            onClick={() => setSection("code")}
                        >
                            Code
                        </button>
                    </div>
                </div>
                <Vignettes
                    prefix="work/articles"
                    images={
                        section === "gfx"
                            ? [
                                  "Wedding",
                                  "MarieLouise79",
                                  "Motor",
                                  "Fredo50",
                                  "Danatia",
                                  "VoughtTower",
                                  "SnowRobots",
                              ]
                            : [
                                  "Minervois",
                                  "Fern",
                                  "Akonolinga",
                                  "FrancaisFacile",
                                  "MediationFamilliale",
                                  "HandsOnWebGL",
                                  "TrailTar",
                                  "ApiHrGraph",
                                  "Tournus",
                                  "Mug",
                              ]
                    }
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
