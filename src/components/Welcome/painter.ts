import Scene from "@/webgl2/scene"
import { PainterInterface } from "../../webgl2/painter/painter-interface"
import Resources from "../../webgl2/scene/resources"
import VertexShader from "./painter.vert"
import FragmentShader from "./painter.frag"
import { DataInterface, makeData } from "../../webgl2/data"
import { Vec3, Mat4, clamp } from "../../webgl2/calc"
import { PointerState } from "../../webgl2/util/gesture/gesture"
import { MoveInterface } from "../../webgl2/move/types"
import { makeMoveEaseInOut } from "../../webgl2/move/ease"

const DETAILS = 128
const VERTICES = 2 * DETAILS
const ZOOM_SPEED = 2e-3

export default class Painter implements PainterInterface {
    private readonly move: MoveInterface
    private readonly vao: WebGLVertexArrayObject
    private readonly prg: WebGLProgram
    private readonly buffer: WebGLBuffer
    private readonly texture: WebGLTexture
    private readonly res: Resources
    private readonly uniSpot: WebGLUniformLocation
    private readonly uniLight: WebGLUniformLocation
    private readonly uniTexture: WebGLUniformLocation
    private readonly uniTransform: WebGLUniformLocation
    private readonly transform = new Mat4()
    private readonly id: string
    private angle = 0
    /**
     * When highlighted, we must increase the zoomFactor up to 1.
     */
    private zoomFactor = 0
    public highlight = false

    constructor(
        private readonly scene: Scene,
        public readonly text = "Tolokoban",
        public readonly initialAngle = 0
    ) {
        this.move = makeMoveEaseInOut({
            duration: 1,
            min: 0.9,
            max: 1.1,
        })
        this.id = `ID#${text}`
        this.angle = initialAngle
        this.res = scene.getResources("WelcomePainter")
        this.texture = this.res.createTexture(this.id)
        this.prg = this.res.createProgram(
            {
                vert: VertexShader,
                frag: FragmentShader,
            },
            this.id
        )
        this.uniSpot = scene.getUniformLocation(this.prg, "uniSpot")
        this.uniLight = scene.getUniformLocation(this.prg, "uniLight")
        this.uniTexture = scene.getUniformLocation(this.prg, "uniTexture")
        this.uniTransform = scene.getUniformLocation(this.prg, "uniTransform")
        this.vao = this.res.createVertexArray(this.id)
        const { gl } = scene
        this.buffer = this.res.createBuffer(this.id)
        const data = makeData(VERTICES, {
            attPos: 3,
            attUV: 2,
        })
        initData(data)
        data.push(gl, this.buffer)
        gl.bindVertexArray(this.vao)
        data.defineAttributes(gl, this.prg, this.buffer)
        scene.texture.loadTexture2D(this.texture, {
            image: createCanvas(text),
            wrapS: "CLAMP_TO_EDGE",
        })
        gl.bindVertexArray(null)
        console.log("CONSTRUCTOR")
    }

    destroy(): void {
        console.log("DESTROY")
        this.res.deleteBuffer(this.id)
        this.res.deleteProgram(this.id)
        this.res.deleteVertexArray(this.id)
        this.res.deteleTexture(this.id)
    }

    paint(time: number, delay: number): void {
        const { angle, prg, vao, scene } = this
        const { gl } = scene
        gl.useProgram(prg)
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LESS)
        gl.bindTexture(gl.TEXTURE_2D, this.texture)
        const C = Math.cos(angle)
        const S = Math.sin(angle)
        this.transform.m00 = C
        this.transform.m10 = S
        this.transform.m01 = -S
        this.transform.m11 = C
        this.transform.setUniform(gl, this.uniTransform)
        gl.uniform1i(this.uniTexture, 0)
        gl.uniform1f(this.uniLight, this.move(this.zoomFactor))
        gl.uniform3f(this.uniSpot, 0, 0, 10)
        gl.bindVertexArray(vao)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, VERTICES)
        gl.bindVertexArray(null)
    }

    update(time: number, delay: number): void {
        this.angle = time * 0.00009 + this.initialAngle
        this.zoomFactor = clamp(
            this.zoomFactor + ZOOM_SPEED * delay * (this.highlight ? 1 : -1)
        )
    }

    computeProximity(pointerX: number, pointerY: number) {
        const len = pointerX ** 2 + pointerY ** 2
        if (len > 0.9) return -1

        const angle = this.angle
        const x = -Math.cos(angle)
        const y = Math.sin(angle)
        return x * pointerX + y * pointerY
    }
}

function initData(data: DataInterface<{ attPos: number; attUV: number }>) {
    const ARC = Math.PI
    const radius = 0.8
    const start = Vec3.fromPolar(0, radius)
    const stop = Vec3.fromPolar(ARC, radius)
    const line = Vec3.fromSubtract(stop, start)
    const perp = new Vec3(line.y, -line.x, 0).normalize().scale(0.5)
    let idxPos = 0
    let idxUV = 0
    data.poke("attPos", shift([start.x, start.y, 1]), idxPos++)
    data.poke("attUV", [0, 0], idxUV++)
    const INV_DETAILS = 1 / DETAILS
    for (let k = 1; k < DETAILS; k++) {
        const alpha = k * INV_DETAILS
        const z = 1 - alpha * alpha
        const top = Vec3.fromPolar(ARC * alpha, radius)
        top.z = z
        const bot = start
            .clone()
            .add(
                line.clone().scale(alpha),
                perp
                    .clone()
                    .scale(
                        0.75 *
                            (alpha < 0.5
                                ? Math.sqrt(1 - ((alpha - 0.25) * 4) ** 2)
                                : -Math.sqrt(1 - ((alpha - 0.75) * 4) ** 2))
                    )
            )
        bot.z = z
        data.poke("attPos", shift(top.xyz), idxPos++)
        const u = 1 - alpha
        data.poke("attUV", [u, 0], idxUV++)
        data.poke("attPos", shift(bot.xyz), idxPos++)
        const v = bot.y - top.y
        data.poke("attUV", [u, v], idxUV++)
    }
    stop.z = 1
    data.poke("attPos", shift(stop.xyz), idxPos)
    data.poke("attUV", [1, 1], idxUV)
}

function createCanvas(text: string): HTMLCanvasElement {
    const w = 1024
    const h = 1024
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext("2d")
    if (!ctx) throw Error("Unable to create 2D context!")

    const primary = "#204657"
    const secondary = "#d6ec64"
    const grad = ctx.createLinearGradient(0, h / 2, w, h / 2)
    grad.addColorStop(0, primary)
    grad.addColorStop(0.5, primary)
    grad.addColorStop(1, secondary)
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, w, h)
    ctx.save()
    ctx.translate(w / 4, h / 3)
    ctx.scale(1, -2)
    const fontHeight = h * 0.07
    ctx.font = `${fontHeight}px dosis`
    const measure = ctx.measureText(text)
    ctx.fillStyle = secondary
    ctx.fillText(text, -0.5 * measure.width, -0.5 * fontHeight)
    ctx.restore()
    return canvas
}

function shift(
    values: [number, number, number] | Float32Array
): [number, number, number] {
    const [x, y, z] = values
    return [x - 0.1, y - 0.1, z]
}
