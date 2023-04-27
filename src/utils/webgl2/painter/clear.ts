import Scene from "../scene/scene"
import { PainterInterface } from "./painter-interface"

export interface PainterClearOptions {
    color: [red: number, green: number, blue: number, alpha: number]
}

export default class PainterClear implements PainterInterface {
    private clearMask = 0
    private readonly options: PainterClearOptions

    constructor(
        private readonly scene: Scene,
        options: Partial<PainterClearOptions>
    ) {
        this.options = {
            color: [0, 0, 0, 1],
            ...options,
        }
        this.clearMask |= scene.gl.COLOR_BUFFER_BIT
        scene.gl.clearColor(...this.options.color)
    }

    setClearColor(red: number, green: number, blue: number, alpha: number) {
        const { color } = this.options
        color[0] = red
        color[1] = green
        color[2] = blue
        color[3] = alpha
    }

    /** Nothing to destroy. */
    destroy(): void {}

    paint(_time: number, _delay: number): void {
        const { clearMask, scene, options } = this
        const { gl } = scene
        if (clearMask > 0) {
            gl.clearColor(...options.color)
            gl.clear(clearMask)
        }
    }

    update(_time: number, _delay: number): void {}
}
