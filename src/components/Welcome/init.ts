import { PainterClear, PainterInterface } from "../../webgl2/painter"
import Scene from "../../webgl2/scene/scene"
import { PointerState } from "../../webgl2/util/gesture/gesture"
import Painter from "./painter"

export function init(scene: Scene) {
    const painterWork = new Painter(scene, "Work", 0)
    const painterBlog = new Painter(scene, "Blog", (2 * Math.PI) / 3)
    const painterContact = new Painter(scene, "Contact", (-2 * Math.PI) / 3)
    scene.addPainter(
        new PainterClear(scene, {
            colorValue: [0, 0, 0, 0],
            depthEnabled: true,
            depthValue: 1,
        }),
        painterWork,
        painterBlog,
        painterContact,
        new PainterLink(scene, [painterWork, painterBlog, painterContact])
    )
}

class PainterLink implements PainterInterface {
    private pointerX = 0
    private pointerY = 0
    private selectedPainter: Painter | null = null

    constructor(
        private readonly scene: Scene,
        private readonly painters: Painter[]
    ) {
        scene.gestures.eventHover.addListener(this.handleHover)
    }

    private readonly handleHover = (evt: PointerState) => {
        this.pointerX = evt.x
        this.pointerY = evt.y
    }

    destroy(): void {
        this.scene.gestures.eventHover.removeListener(this.handleHover)
    }

    paint(time: number, delay: number): void {}

    update(time: number, delay: number): void {
        this.selectedPainter = null
        let bestValue = 0
        for (let index = 0; index < this.painters.length; index++) {
            const painter = this.painters[index]
            const proximity = painter.computeProximity(
                this.pointerX,
                this.pointerY
            )
            if (proximity > bestValue) {
                this.selectedPainter = painter
                bestValue = proximity
            }
        }

        for (const painter of this.painters) {
            painter.highlight = painter === this.selectedPainter
        }
    }
}
