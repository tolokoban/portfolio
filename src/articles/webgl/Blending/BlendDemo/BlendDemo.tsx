import Flex from "@/components/Flex/Flex"
import { ViewLabel, ViewSlider } from "@/ui"
import { PainterClear } from "@/webgl2/painter"
import PainterBlend, {
    BlendFactor,
    BlendFunction,
} from "@/webgl2/painter/blend"
import Scene from "@/webgl2/scene"
import React from "react"
import Style from "./BlendDemo.module.css"
import SelectFactor from "./SelectFactor/SelectFactor"
import SelectFunction from "./SelectFunction/SelectFunction"
import PainterDemo from "./painter"

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
    const refPainterClear = React.useRef<PainterClear | null>(null)
    const [opacity, setOpacity] = React.useState(1)
    const [blend, setBlend] = React.useState<BlendOptions>({
        factorSrcColor: "ONE",
        factorSrcAlpha: "ONE",
        factorDstColor: "ZERO",
        factorDstAlpha: "ZERO",
        functionColor: "FUNC_ADD",
        functionAlpha: "FUNC_ADD",
    })
    React.useEffect(() => {
        const painterClear = refPainterClear.current
        if (!painterClear) return

        painterClear.setClearColor(0.5, 0.5, 0.5, opacity)
        refScene.current?.paint()
    }, [opacity])
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
            alpha: true,
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
        const painterClear = new PainterClear(scene, {
            color: [0.5, 0.5, 0.5, 1],
        })
        refPainterClear.current = painterClear
        scene.addPainter(painterClear, painterBlend, new PainterDemo(scene))
        scene.paint()
    }
    return (
        <>
            <canvas
                className={join(className, Style.BlendDemo)}
                ref={handleCanvasMount}
            ></canvas>
            <div className="margin-right">
                <Flex flexDirection="column" alignItems="stretch">
                    <ViewLabel
                        value={`Background opacity (${(
                            100 * opacity
                        ).toFixed()}%)`}
                    >
                        <ViewSlider
                            value={opacity}
                            onChange={setOpacity}
                            min={0}
                            max={1}
                            step={0.1}
                        />
                    </ViewLabel>
                </Flex>
                <hr />
                <SelectFactor
                    label={"Source Color Factor"}
                    value={blend.factorSrcColor}
                    onChange={(factorSrcColor) => update({ factorSrcColor })}
                />
                <SelectFactor
                    label={"Destination Color Factor"}
                    value={blend.factorDstColor}
                    onChange={(factorDstColor) => update({ factorDstColor })}
                />
                <SelectFunction
                    label={"Source Color Equation"}
                    value={blend.functionColor}
                    onChange={(functionColor) => update({ functionColor })}
                />
                <hr />
                <SelectFactor
                    label={"Source Alpha Factor"}
                    value={blend.factorSrcAlpha}
                    onChange={(factorSrcAlpha) => update({ factorSrcAlpha })}
                />
                <SelectFactor
                    label={"Destination Alpha Factor"}
                    value={blend.factorDstAlpha}
                    onChange={(factorDstAlpha) => update({ factorDstAlpha })}
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
