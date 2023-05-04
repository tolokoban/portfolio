import React from "react"
import Style from "./InfinitePlanDemo.module.css"
import Scene from "@/utils/webgl2/scene"
import InfinitePlanPainter from "./painter"
import { PainterClear } from "@/utils/webgl2/painter"

export interface InfinitePlanDemoProps {
    className?: string
}

export default function InfinitePlanDemo({ className }: InfinitePlanDemoProps) {
    const refScene = React.useRef<Scene | null>(null)
    const refPainter = React.useRef<InfinitePlanPainter | null>(null)
    const handleCanvasMount = (canvas: HTMLCanvasElement) => {
        if (!canvas) return
        if (refScene.current) return

        const scene = new Scene(canvas, {
            alpha: false,
            preserveDrawingBuffer: false,
            antialias: false,
            depth: true,
            stencil: false,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "low-power",
        })
        refScene.current = scene
        const painter = new InfinitePlanPainter(scene)
        refPainter.current = painter
        canvas.addEventListener(
            "pointermove",
            makePointerMoveHandler(scene, painter)
        )
        const painterClear = new PainterClear(scene, {
            color: [0.3, 0.5, 1, 1],
        })
        scene.addPainter(painterClear, painter)
        scene.paint()
    }
    return (
        <div className={join(className, Style.InfinitePlanDemo)}>
            <canvas ref={handleCanvasMount} width={512} height={512}></canvas>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function makePointerMoveHandler(
    scene: Scene,
    painter: InfinitePlanPainter
): (this: HTMLCanvasElement, ev: PointerEvent) => any {
    return (evt: PointerEvent) => {
        const canvas = evt.target as HTMLCanvasElement
        const { left, top, width, height } = canvas.getBoundingClientRect()
        const x = (evt.clientX - left) / width - 0.5
        const y = (evt.clientY - top) / height - 0.5
        const roll = x
        const pitch = y * 2 * Math.PI
        painter.setOrientation(pitch, roll)
        scene.paint()
    }
}
