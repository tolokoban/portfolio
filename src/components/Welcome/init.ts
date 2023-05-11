import { PainterClear, PainterInterface } from "../../webgl2/painter"
import Scene from "../../webgl2/scene/scene"
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
        new PainterLink([painterWork, painterBlog, painterContact])
    )
}

class PainterLink implements PainterInterface {
    constructor(private readonly painters: Painter[]) {}

    destroy(): void {}
    paint(time: number, delay: number): void {}
    update(time: number, delay: number): void {
        let bestIndex = -1
        let bestValue = 0
        for (let index = 0; index < this.painters.length; index++) {
            const painter = this.painters[index]
            if (painter.proximity > bestValue) {
                bestIndex = index
                bestValue = painter.proximity
            }
        }

        for (let index = 0; index < this.painters.length; index++) {
            const painter = this.painters[index]
            painter.highlight = index === bestIndex
        }
    }
}
