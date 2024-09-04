import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    tgdFullscreenToggle,
    TgdLoaderGlb,
    TgdPainterClear,
    TgdPainterMeshGltf,
    TgdPainterState,
} from "@tolokoban/tgd"
import styles from "./page.module.css"

export default function PageMug() {
    const handleMount = useMountHandler()
    return (
        <div className={styles.main}>
            <canvas ref={handleMount}></canvas>
        </div>
    )
}

function useMountHandler() {
    return (canvas: HTMLCanvasElement | null) => {
        if (!canvas) return

        canvas.addEventListener("dblclick", () => tgdFullscreenToggle(canvas))
        const context = new TgdContext(canvas)
        context.add(
            new TgdPainterClear(context, {
                depth: 1,
                color: [0.2, 0.2, 0.2, 1],
            })
        )
        const state = new TgdPainterState(context, {
            // depth: "default",
            depth: {
                func: "LESS",
                mask: true,
                range: [0, 1],
            },
        })
        context.add(state)
        const camera = new TgdCameraPerspective({
            distance: 60,
            far: 1000,
            near: 0.1,
            fovy: Math.PI / 4,
            zoom: 1,
            target: [0, 10, 0],
        })
        context.camera = camera
        camera.face("+X+Y+Z")
        new TgdControllerCameraOrbit(context, {
            inertiaOrbit: 900,
        })
        context.paint()
        TgdLoaderGlb.glb("assets/mug/mug.glb")
            .then((asset) => {
                if (!asset) {
                    console.error("Unable to load the mug!")
                    return
                }
                state.add(
                    new TgdPainterMeshGltf(context, {
                        asset,
                    })
                )
                context.paint()
            })
            .catch(console.error)
    }
}
