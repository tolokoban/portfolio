import Scene from "@/utils/webgl2/scene"
import Style from "./BlendDemo.module.css"
import { PainterClear } from "@/utils/webgl2/painter"
import React from "react"
import { makeData } from "@/utils/webgl2/data"
import PainterDemo from "./painter"
import PainterBlend, {
    BlendFactor,
    BlendFunction,
} from "@/utils/webgl2/painter/blend"
import SelectFactor from "./SelectFactor/SelectFactor"
import SelectFunction from "./SelectFunction/SelectFunction"

export interface BlendDemoProps {
    className?: string
}

interface BlendOptions {
    factorSrcColor: BlendFactor
    factorSrcAlpha: BlendFactor
    factorDstColor: BlendFactor
    factorDstAlpha: BlendFactor
    functionColor: BlendFunction
    functionAlpha: BlendFunction
}

export default function BlendDemo({ className }: BlendDemoProps) {
    const refScene = React.useRef<Scene | null>(null)
    const refPainterBlend = React.useRef<PainterBlend | null>(null)
    const [blend, setBlend] = React.useState<BlendOptions>({
        factorSrcColor: "ONE",
        factorSrcAlpha: "ONE",
        factorDstColor: "ZERO",
        factorDstAlpha: "ZERO",
        functionColor: "FUNC_ADD",
        functionAlpha: "FUNC_ADD",
    })
    const update = (params: Partial<BlendOptions>) => {
        const newBlend = {
            ...blend,
            ...params,
        }
        setBlend(newBlend)
        const painterBlend = refPainterBlend.current
        if (painterBlend) {
            painterBlend.enabled = true
            painterBlend.factorSrcColor = newBlend.factorSrcColor
            painterBlend.factorSrcAlpha = newBlend.factorSrcAlpha
            painterBlend.factorDstColor = newBlend.factorDstColor
            painterBlend.factorDstAlpha = newBlend.factorDstAlpha
            painterBlend.functionColor = newBlend.functionColor
            painterBlend.functionAlpha = newBlend.functionAlpha
        }
        console.log(newBlend)
        const scene = refScene.current
        if (scene) scene.paint()
    }
    const handleCanvasMount = (canvas: HTMLCanvasElement) => {
        if (!canvas) return
        if (refScene.current) return

        const scene = new Scene(canvas, {
            alpha: false,
            premultipliedAlpha: false,
            preserveDrawingBuffer: false,
            antialias: false,
            depth: false,
            stencil: false,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "low-power",
        })
        refScene.current = scene
        const painterBlend = new PainterBlend(scene, {
            enabled: true,
            factorSrcColor: "ONE",
            factorSrcAlpha: "ONE",
            factorDstColor: "ZERO",
            factorDstAlpha: "ZERO",
            functionColor: "FUNC_ADD",
            functionAlpha: "FUNC_ADD",
        })
        refPainterBlend.current = painterBlend
        scene.addPainter(
            new PainterClear(scene, {
                color: [0.5, 0.5, 0.5, 1],
            }),
            painterBlend,
            new PainterDemo(scene)
        )
        scene.paint()
    }
    return (
        <>
            <canvas
                className={join(className, Style.BlendDemo)}
                ref={handleCanvasMount}
            ></canvas>
            <div className="margin-right">
                <SelectFactor
                    label={"Source Color Factor"}
                    value={blend.factorSrcColor}
                    onChange={(factorSrcColor) => update({ factorSrcColor })}
                />
                <SelectFactor
                    label={"Source Alpha Factor"}
                    value={blend.factorSrcAlpha}
                    onChange={(factorSrcAlpha) => update({ factorSrcAlpha })}
                />
                <SelectFactor
                    label={"Destination Color Factor"}
                    value={blend.factorDstColor}
                    onChange={(factorDstColor) => update({ factorDstColor })}
                />
                <SelectFactor
                    label={"Destination Alpha Factor"}
                    value={blend.factorDstAlpha}
                    onChange={(factorDstAlpha) => update({ factorDstAlpha })}
                />
                <SelectFunction
                    label={"Source Color Equation"}
                    value={blend.functionColor}
                    onChange={(functionColor) => update({ functionColor })}
                />
                <SelectFunction
                    label={"Source Alpha Equation"}
                    value={blend.functionAlpha}
                    onChange={(functionAlpha) => update({ functionAlpha })}
                />
            </div>
        </>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
