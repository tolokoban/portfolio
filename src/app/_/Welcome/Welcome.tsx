import React from "react"

import Vignette from "@/components/Vignette"
import { useTranslation } from "../translation"
import { RoutePath } from "@/app/types"
import { ResponsiveImageCoreProps } from "@/components/ResponsiveImage"

import CodeTP from "@/generated/code/TP"
import CodeCircuitStudio from "@/generated/code/CircuitStudio"
import CodeBBOP from "@/generated/code/BBOP"
import CodeProteinAtlas from "@/generated/code/ProteinAtlas"
import CodeOpenDeck from "@/generated/code/OpenDeck"
import CodeHippocampus from "@/generated/code/Hippocampus"
import CodeMinervois from "@/generated/code/Minervois"
import CodeAkonolinga from "@/generated/code/Akonolinga"
import CodeWebgl from "@/generated/code/Webgl"
import CodeFern from "@/generated/code/Fern"
import CodeFrancaisFacile from "@/generated/code/FrancaisFacile"
import CodeMediationFamilliale from "@/generated/code/MediationFamilliale"
import CodeHandsOnWebGL from "@/generated/code/HandsOnWebGL"
import CodeTrailTar from "@/generated/code/TrailTar"
import CodeApiHrGraph from "@/generated/code/ApiHrGraph"
import CodeTournus from "@/generated/code/Tournus"
import GrafixWedding from "@/generated/grafix/Wedding"
import GrafixMarieLouise79 from "@/generated/grafix/MarieLouise79"
import GrafixMotor from "@/generated/grafix/Motor"
import GrafixFredo50 from "@/generated/grafix/Fredo50"
import GrafixDanatia from "@/generated/grafix/Danatia"
import GrafixVoughtTower from "@/generated/grafix/VoughtTower"
import GrafixSnowRobots from "@/generated/grafix/SnowRobots"
import GrafixVega30 from "@/generated/grafix/Vega30BlackHole"

import styles from "./Welcome.module.css"

export interface WelcomeProps {
    className?: string
}

const TROMBINE = "images/trombine/trombine.webp"

const VIGNETTES: Record<
    "code" | "gfx",
    Partial<
        Record<RoutePath, (props: ResponsiveImageCoreProps) => React.ReactNode>
    >
> = {
    code: {
        "/work/articles/TP": CodeTP,
        "/work/articles/CircuitStudio": CodeCircuitStudio,
        "/work/articles/BBOP": CodeBBOP,
        "/work/articles/ProteinAtlas": CodeProteinAtlas,
        "/work/articles/OpenDeck": CodeOpenDeck,
        "/work/articles/Hippocampus": CodeHippocampus,
        "/work/articles/Minervois": CodeMinervois,
        "/work/articles/Akonolinga": CodeAkonolinga,
        "/work/articles/Webgl": CodeWebgl,
        "/work/articles/Fern": CodeFern,
        "/work/articles/FrancaisFacile": CodeFrancaisFacile,
        "/work/articles/MediationFamilliale": CodeMediationFamilliale,
        "/work/articles/HandsOnWebGL": CodeHandsOnWebGL,
        "/work/articles/TrailTar": CodeTrailTar,
        "/work/articles/ApiHrGraph": CodeApiHrGraph,
        "/work/articles/Tournus": CodeTournus,
    },
    gfx: {
        "/work/articles/Vega30BlackHole": GrafixVega30,
        "/work/articles/Wedding": GrafixWedding,
        "/work/articles/MarieLouise79": GrafixMarieLouise79,
        "/work/articles/Motor": GrafixMotor,
        "/work/articles/Fredo50": GrafixFredo50,
        "/work/articles/Danatia": GrafixDanatia,
        "/work/articles/VoughtTower": GrafixVoughtTower,
        "/work/articles/SnowRobots": GrafixSnowRobots,
    },
}

export default function Welcome({ className }: WelcomeProps) {
    const tr = useTranslation()
    const [section, setSection] = React.useState<keyof typeof VIGNETTES>("code")
    const [trombineOpacity, setTrombineOpacity] = React.useState(0)
    React.useEffect(() => {
        const img = new Image()
        img.src = TROMBINE
        img.onload = () => setTrombineOpacity(1)
    })
    return (
        <div className={join(className, styles.Welcome)}>
            <img
                className={styles.trombine}
                src={TROMBINE}
                style={{ opacity: trombineOpacity }}
            />
            <section>
                <main>
                    <div>{tr.intro}</div>
                </main>
                <div className={styles.switch}>
                    <div>
                        <button
                            className={join(
                                section === "gfx" && styles.switchOn
                            )}
                            onClick={() => setSection("gfx")}
                        >
                            Grafix
                        </button>
                        <button
                            className={join(
                                section === "code" && styles.switchOn
                            )}
                            onClick={() => setSection("code")}
                        >
                            Code
                        </button>
                    </div>
                </div>
                <div className={styles.vignettes}>
                    {Object.keys(VIGNETTES[section]).map(path => {
                        const vignettes = VIGNETTES[section]
                        const Image = vignettes[path as RoutePath]
                        if (!Image) return null

                        return (
                            <Vignette
                                key={path}
                                href={`#${path}`}
                                image={Image}
                            />
                        )
                    })}
                </div>
                <article>
                    <a href="#/contact">Contact</a>
                </article>
            </section>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter(cls => typeof cls === "string").join(" ")
}
