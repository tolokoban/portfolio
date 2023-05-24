import React from "react"
import Style from "./ColorGuessView.module.css"
import { ViewButton, ViewSlider } from "@/ui/view"
import HueSelector from "../HueSelector"
import SatSelector from "../SatSelector/SatSelector"
import LumSelector from "../LumSelector"

export interface ColorGuessViewProps {
    className?: string
}

/**
 * 0, 1, 2, ..., 18
 * That means that each interval is 20° (360/18 = 20).
 */
const STEPS_HUE = 19
const STEPS_SAT = 11
const STEPS_LUM = 11

interface ColorHSL {
    /** Between 0 and 359. */
    hue: number
    /** Between 0 and 99. */
    sat: number
    /** Between 0 and 99. */
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
                    <div>
                        <small>H:</small>
                        <span>{Math.floor(foreground.hue)}°</span>
                    </div>
                    <div>
                        <small>S:</small>
                        <span>{Math.floor(foreground.sat)}%</span>
                    </div>
                    <div>
                        <small>L:</small>
                        <span>{Math.floor(foreground.lum)}%</span>
                    </div>
                </div>
                {win ? (
                    <div>
                        <p>Nice job!</p>
                        <ViewButton
                            onClick={handleRestart}
                            color={`hsl(${foreground.hue} ${foreground.sat}% ${foreground.lum}%)`}
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
                            <SatSelector
                                className={Style.wide}
                                hue={foreground.hue}
                                steps={STEPS_SAT}
                                value={foreground.sat}
                                onChange={(sat) => update({ sat })}
                            />
                            <LumSelector
                                className={Style.wide}
                                hue={foreground.hue}
                                steps={STEPS_LUM}
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
    return `hsl(${color.hue} ${color.sat}% ${color.lum}%)`
}

function createRandomColor(): ColorHSL {
    return {
        hue: rnd(359, STEPS_HUE, 0, STEPS_HUE - 2),
        sat: rnd(99, STEPS_SAT, 1, STEPS_SAT - 1),
        lum: rnd(99, STEPS_LUM, 1, STEPS_LUM - 2),
    }
}

function rnd(
    maxValue: number,
    steps: number,
    minStep: number,
    maxStep: number
): number {
    const index = minStep + Math.floor((maxStep - minStep + 1) * Math.random())
    return Math.floor(((maxValue + 1) * index) / (steps - 1))
}
