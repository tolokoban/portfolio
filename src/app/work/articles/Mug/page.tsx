import {
    TgdCameraPerspective,
    TgdContext,
    TgdControllerCameraOrbit,
    tgdFullscreenToggle,
    TgdLoaderGlb,
    TgdLoaderImage,
    TgdPainterClear,
    TgdPainterGroup,
    TgdPainterMeshGltf,
    TgdPainterSkybox,
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
            zoom: 1,
            target: [0, 0, 10],
        })
        context.camera = camera
        camera.face("+X+Z-Y")
        new TgdControllerCameraOrbit(context, {
            inertiaOrbit: 900,
        })
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
                    const img = new Image()
                    clear.add(
                        new TgdPainterSkybox(context, {
                            imagePosX: imagePosX ?? img,
                            imagePosY: imagePosY ?? img,
                            imagePosZ: imagePosZ ?? img,
                            imageNegX: imageNegX ?? img,
                            imageNegY: imageNegY ?? img,
                            imageNegZ: imageNegZ ?? img,
                        })
                    )
                }
            )
            .catch(console.error)
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
