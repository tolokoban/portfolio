import {
    tgdActionCreateCameraInterpolation,
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    tgdEasingFunctionOutBack,
    tgdFullscreenToggle,
    TgdLoaderGlb,
    TgdLoaderImage,
    TgdPainterAxis,
    TgdPainterClear,
    TgdPainterGroup,
    TgdPainterMeshGltf,
    TgdPainterSkybox,
    TgdPainterState,
    TgdQuat,
} from "@tolokoban/tgd"
import styles from "./page.module.css"
import { makeMugPainter } from "./_/mug-painter"

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
        const clear = new TgdPainterGroup([
            new TgdPainterClear(context, {
                depth: 1,
                color: [0.2, 0.2, 0.2, 1],
            }),
        ])
        context.add(clear)
        const state = new TgdPainterState(context, {
            depth: "default",
        })
        context.add(state)
        const camera = new TgdCameraPerspective({
            distance: 60,
            far: 1000,
            near: 0.1,
            fovy: Math.PI / 4,
            zoom: 0.1,
            target: [0, 0, 10],
        })
        context.camera = camera
        camera.face("+X+Y+Z")
        context.animSchedule({
            action: tgdActionCreateCameraInterpolation(context.camera, {
                zoom: 1,
                orientation: new TgdQuat().face("+Y+Z+X"),
            }),
            duration: 1000,
            easingFunction: tgdEasingFunctionOutBack,
        })
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
                // const mesh = new TgdPainterMeshGltf(context, {
                //     asset,
                // })
                const mesh = makeMugPainter(context, { asset })
                state.add(mesh)
                context.paint()
                TgdLoaderImage.images(
                    [1, 2, 3, 4, 5, 6].map((i) => `assets/mug/${i}.webp`)
                )
                    .then(
                        ([
                            imagePosX,
                            imagePosY,
                            imagePosZ,
                            imageNegX,
                            imageNegY,
                            imageNegZ,
                        ]) => {
                            window.setTimeout(() => {
                                const img = new Image()
                                clear.add(
                                    new TgdPainterSkybox(context, {
                                        imagePosX: imagePosX ?? img,
                                        imagePosY: imagePosY ?? img,
                                        imagePosZ: imagePosZ ?? img,
                                        imageNegX: imageNegX ?? img,
                                        imageNegY: imageNegY ?? img,
                                        imageNegZ: imageNegZ ?? img,
                                    }),
                                    new TgdPainterAxis(context, {
                                        x: 0,
                                        y: 0,
                                        z: 0,
                                        scale: 100,
                                    })
                                )
                                context.paint()
                            }, 100)
                        }
                    )
                    .catch(console.error)
            })
            .catch(console.error)
    }
}
