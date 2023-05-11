import Scene from "../scene/scene"
import { PainterInterface } from "./painter-interface"

export interface PainterClearOptions {
    colorClear: boolean
    colorValue: [red: number, green: number, blue: number, alpha: number]
    depthClear: boolean
    depthEnabled: boolean
    depthMin: number
    depthMax: number
    depthValue: number
    depthFunc:
        | "NEVER"
        | "LESS"
        | "EQUAL"
        | "LEQUAL"
        | "GREATER"
        | "NOTEQUAL"
        | "GEQUAL"
        | "ALWAYS"
}

const DEFAULT_OPTIONS: PainterClearOptions = {
    colorClear: false,
    colorValue: [0, 0, 0, 1],
    depthClear: false,
    depthEnabled: true,
    depthFunc: "LESS",
    depthMax: 1,
    depthMin: 0,
    depthValue: 1,
}

type PartialPainterClearOptions = Partial<
    Omit<PainterClearOptions, "colorClear" | "depthClear">
>

export default class PainterClear implements PainterInterface {
    private clearMask = 0
    private options: PainterClearOptions = { ...DEFAULT_OPTIONS }

    constructor(
        private readonly scene: Scene,
        options: PartialPainterClearOptions
    ) {
        this.set(options)
    }

    set(options: PartialPainterClearOptions) {
        const { scene } = this
        this.options = {
            ...this.options,
            ...options,
        }
        this.clearMask = 0
        if (typeof options.colorValue === "number") {
            this.clearMask |= scene.gl.COLOR_BUFFER_BIT
            this.options.colorClear = true
        }
        if (typeof options.depthValue === "number") {
            this.clearMask |= scene.gl.DEPTH_BUFFER_BIT
            this.options.depthClear = true
            const depth = scene.gl.getContextAttributes()?.depth
            if (depth !== true) {
                throw Error(
                    `WebGL2 context has been initialized with depth:${depth}!\nHence, we cannot use depth!`
                )
            }
        }
    }

    /** Nothing to destroy. */
    destroy(): void {}

    paint(_time: number, _delay: number): void {
        const { clearMask, scene, options } = this
        const { gl } = scene
        if (options.colorClear) {
            gl.clearColor(...options.colorValue)
        }
        if (options.depthClear) {
            if (options.depthEnabled) gl.enable(gl.DEPTH_TEST)
            else gl.disable(gl.DEPTH_TEST)
            gl.clearDepth(options.depthValue)
            gl.depthFunc(gl[options.depthFunc])
            gl.depthRange(options.depthMin, options.depthMax)
            gl.depthMask(true)
        }
        if (clearMask > 0) {
            gl.clear(clearMask)
        }
    }

    update(_time: number, _delay: number): void {}
}
