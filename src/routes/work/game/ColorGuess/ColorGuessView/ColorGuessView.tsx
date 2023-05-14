import React from "react"
import Style from "./ColorGuessView.module.css"
import { ViewButton, ViewSlider } from "@/ui/view"
import HueSelector from "../HueSelector"

export interface ColorGuessViewProps {
    className?: string
}

const STEPS = 10

interface ColorHSL {
    hue: number
    sat: number
    lum: number
}

export default function ColorGuessView({ className }: ColorGuessViewProps) {
    const [background, setBackground] = React.useState(createRandomColor())
    const [foreground, setForeground] = React.useState(createRandomColor())
    const win =
        background.hue === foreground.hue &&
        background.sat === foreground.sat &&
        background.lum === foreground.lum
    const update = (color: Partial<ColorHSL>) => {
        setForeground({
            ...foreground,
            ...color,
        })
    }
    const handleRestart = () => {
        setBackground(createRandomColor())
        setForeground(createRandomColor())
    }
    console.log("🚀 [ColorGuessView] foreground = ", foreground) // @FIXME: Remove this line written on 2023-05-12 at 19:38
    console.log("🚀 [ColorGuessView] background = ", background) // @FIXME: Remove this line written on 2023-05-12 at 19:44
    return (
        <div
            className={join(className, Style.ColorGuessView)}
            style={{
                background: getCssColor(background),
            }}
        >
            <div>
                <div
                    style={{
                        background: getCssColor(foreground),
                        border: win ? ".25em dotted #000" : "none",
                    }}
                >
                    <div
                        style={{
                            background: getCssColor(background),
                        }}
                    ></div>
                </div>
            </div>
            <footer>
                {win ? (
                    <div>
                        <p>Nice job!</p>
                        <ViewButton onClick={handleRestart}>Restart</ViewButton>
                    </div>
                ) : (
                    <>
                        <div>
                            <HueSelector
                                steps={STEPS}
                                value={foreground.hue}
                                onChange={(hue) => update({ hue })}
                            />
                            <ViewSlider
                                className={Style.wide}
                                min={0}
                                max={STEPS}
                                step={1}
                                value={foreground.hue}
                                onChange={(hue) => update({ hue })}
                            />
                            <ViewSlider
                                className={Style.wide}
                                min={0}
                                max={STEPS}
                                step={1}
                                value={foreground.sat}
                                onChange={(sat) => update({ sat })}
                            />
                            <ViewSlider
                                className={Style.wide}
                                min={0}
                                max={STEPS}
                                step={1}
                                value={foreground.lum}
                                onChange={(lum) => update({ lum })}
                            />
                        </div>
                    </>
                )}
            </footer>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function getCssColor(color: ColorHSL) {
    return `hsl(${(color.hue * 360) / STEPS} ${(100 * color.sat) / STEPS}% ${
        (100 * color.lum) / STEPS
    }%)`
}

function createRandomColor(): ColorHSL {
    return {
        hue: rnd(STEPS + 1),
        sat: rnd(STEPS + 1),
        lum: rnd(STEPS + 1),
    }
}

function rnd(count: number): number {
    return Math.floor(count * Math.random())
}
