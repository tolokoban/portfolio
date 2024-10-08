import PainterGroup from "../painter/group"
import { PainterInterface } from "../painter/painter-interface"
import Gestures from "../util/gesture"
import Asset from "./asset"
import TextureHelper from "./helpers/texture-helper"
import Resources from "./resources"

export default class Scene {
    public readonly gl: WebGL2RenderingContext
    public readonly asset: Asset
    public readonly texture: TextureHelper

    /** Request animation frame handle. */
    private handle = 0
    private readonly painters = new PainterGroup()
    private isAnimated = false
    private lastCanvasWidth = 0
    private lastCanvasHeight = 0
    private lastTime = -1
    private _screenRatio = 1
    private gesturesManager: Gestures | null = null

    constructor(
        public readonly canvas: HTMLCanvasElement,
        options?: WebGLContextAttributes
    ) {
        const gl = canvas.getContext("webgl2", options)
        if (!gl) throw Error("Unable to create a WebGL2 context!")

        this.gl = gl
        this.asset = new Asset()
        this.texture = new TextureHelper(gl)
    }

    get gestures(): Omit<Gestures, "attach" | "detach"> {
        if (!this.gesturesManager) {
            this.gesturesManager = new Gestures()
            this.gesturesManager.attach(this.canvas)
        }
        return this.gesturesManager
    }

    getResources(id: string) {
        return Resources.make(this.gl, id)
    }

    getUniformLocation(
        program: WebGLProgram,
        name: string
    ): WebGLUniformLocation {
        const uni = this.gl.getUniformLocation(program, name)
        if (!uni) {
            const availableUniforms: string[] = []
            const uniformsCount = this.gl.getProgramParameter(
                program,
                this.gl.ACTIVE_UNIFORMS
            )
            for (
                let uniformIndex = 0;
                uniformIndex < uniformsCount;
                uniformIndex++
            ) {
                const info = this.gl.getActiveUniform(program, uniformIndex)
                if (!info) continue

                availableUniforms.push(info.name)
            }
            throw Error(`Unable to get uniform location of "${name}"!
Active uniforms are: ${availableUniforms.join(", ")}.`)
        }

        return uni
    }

    get screenRatio() {
        return this._screenRatio
    }
    private set screenRatio(value: number) {
        this._screenRatio = value
    }

    get width() {
        return this.lastCanvasWidth
    }
    get height() {
        return this.lastCanvasHeight
    }

    get animate() {
        return this.isAnimated
    }
    set animate(value: boolean) {
        if (this.isAnimated === value) return
        this.isAnimated = value
        if (value) this.paint()
    }

    async addPainter(...painters: PainterInterface[]): Promise<void> {
        for (const painter of painters) {
            this.painters.add(painter)
        }
    }

    paint() {
        window.cancelAnimationFrame(this.handle)
        this.handle = window.requestAnimationFrame(this.actualPaint)
    }

    private readonly actualPaint = (time: number) => {
        const { gl, lastCanvasWidth, lastCanvasHeight, lastTime } = this
        if (lastTime < 0) {
            this.lastTime = time
            // First frame, let's skip it to get better timing.
            this.paint()
            return
        }

        const canvas = gl.canvas as HTMLCanvasElement
        const dpr = window.devicePixelRatio
        const expectedWidth = Math.max(1, Math.round(canvas.clientWidth * dpr))
        const expectedheight = Math.max(
            1,
            Math.round(canvas.clientHeight * dpr)
        )
        if (
            lastCanvasWidth !== expectedWidth ||
            lastCanvasHeight !== expectedheight
        ) {
            canvas.width = expectedWidth
            canvas.height = expectedheight
            this.lastCanvasWidth = expectedWidth
            this.lastCanvasHeight = expectedheight
            gl.viewport(0, 0, expectedWidth, expectedheight)
            this.screenRatio = expectedWidth / expectedheight
        }

        const delay = time - this.lastTime
        this.lastTime = time
        this.painters.paint(time, delay)
        this.painters.update(time, delay)
        if (this.isAnimated) this.paint()
    }

    destroy() {
        this.painters.destroy()
        if (this.gesturesManager) this.gesturesManager.detach(this.canvas)
    }
}
