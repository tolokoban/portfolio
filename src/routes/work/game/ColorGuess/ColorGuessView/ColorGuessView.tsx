import React from "react"
import Style from "./ColorGuessView.module.css"
import { ViewButton, ViewSlider } from "@/ui/view"
import HueSelector from "../HueSelector"

export interface ColorGuessViewProps {
    className?: string
}

const STEPS_HUE = 18
const STEPS_SAT = 10
const STEPS_LUM = 10

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
                <div className={Style.color}>
                    <div>{Math.floor((360 * foreground.hue) / STEPS_HUE)}°</div>
                    <div>{Math.floor((100 * foreground.sat) / STEPS_SAT)}%</div>
                    <div>{Math.floor((100 * foreground.lum) / STEPS_LUM)}%</div>
                </div>
                {win ? (
                    <div>
                        <p>Nice job!</p>
                        <ViewButton
                            onClick={handleRestart}
                            color={`hsl(${Math.floor(
                                (360 * foreground.hue) / STEPS_HUE
                            )} ${Math.floor(
                                (100 * foreground.sat) / STEPS_SAT
                            )}% ${Math.floor(
                                (100 * foreground.lum) / STEPS_LUM
                            )}%)`}
                        >
                            Restart
                        </ViewButton>
                    </div>
                ) : (
                    <>
                        <div>
                            <HueSelector
                                className={Style.wide}
                                steps={STEPS_HUE}
                                value={foreground.hue}
                                onChange={(hue) => update({ hue })}
                            />
                            <ViewSlider
                                className={Style.wide}
                                min={1}
                                max={STEPS_SAT}
                                step={1}
                                value={foreground.sat}
                                onChange={(sat) => update({ sat })}
                            />
                            <ViewSlider
                                className={Style.wide}
                                min={1}
                                max={STEPS_LUM - 1}
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
    return `hsl(${(color.hue * 360) / STEPS_HUE} ${
        (100 * color.sat) / STEPS_SAT
    }% ${(100 * color.lum) / STEPS_LUM}%)`
}

function createRandomColor(): ColorHSL {
    return {
        hue: rnd(0, STEPS_HUE),
        sat: rnd(1, STEPS_SAT),
        lum: rnd(1, STEPS_LUM - 1),
    }
}

function rnd(min: number, max: number): number {
    return min + Math.floor((max - min + 1) * Math.random())
}
