import { PainterClear } from "@/webgl2/painter"
import Scene from "@/webgl2/scene"
import Gestures, { PointerMoveState } from "@/webgl2/util/gesture/gesture"
import React from "react"
import Style from "./InfinitePlaneDemo.module.css"
import InfinitePlanPainter from "./painter"

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
            depth: false,
            stencil: false,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "high-performance",
        })
        refScene.current = scene
        const painter = new InfinitePlanPainter(scene)
        refPainter.current = painter
        const gestures = new Gestures()
        gestures.attach(canvas)
        gestures.eventDrag.addListener(makePointerMoveHandler(scene, painter))
        // Prevent the scene from getting back to equilibrium state.
        gestures.eventDown.addListener(() => (painter.pinned = true))
        gestures.eventUp.addListener(() => (painter.pinned = false))
        const painterClear = new PainterClear(scene, {
            color: [0.3, 0.5, 1, 1],
        })
        scene.addPainter(painterClear, painter)
        scene.animate = true
    }
    return (
        <div className={join(className, Style.InfinitePlanDemo)}>
            <canvas
                ref={handleCanvasMount}
                width={512}
                height={512}
                onDoubleClick={handleFullscreen}
            ></canvas>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}

function makePointerMoveHandler(
    scene: Scene,
    painter: InfinitePlanPainter
): (this: HTMLCanvasElement, evt: PointerMoveState) => any {
    return (evt: PointerMoveState) => {
        const x = evt.current.x - evt.previous.x
        const y = evt.current.y - evt.previous.y
        painter.roll += x
        painter.pitch += y //* 2 * Math.PI
        scene.paint()
    }
}

function handleFullscreen(evt: React.MouseEvent<HTMLCanvasElement>) {
    const canvas = evt.target as HTMLCanvasElement
    canvas.requestFullscreen({
        navigationUI: "hide",
    })
}
