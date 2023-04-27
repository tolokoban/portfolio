import { PainterInterface } from "@/utils/webgl2/painter/painter-interface"
import Scene from "@/utils/webgl2/scene/scene"
import { Vector4 } from "@/utils/type-guards"
import { DataInterface, makeData } from "@/utils/webgl2/data"
import Resources from "@/utils/webgl2/scene/resources"
import VertexShader from "./painter.vert"
import FragmentShader from "./painter.frag"

const colorA: Vector4 = [0.9, 0.9, 0.7, 0.8]
const colorB: Vector4 = [0.8, 0.2, 0.8, 0.5]
const colorC: Vector4 = [0.3, 0.7, 0.7, 0.2]

export default class Painter implements PainterInterface {
    private readonly vao: WebGLVertexArrayObject
    private readonly prg: WebGLProgram
    private readonly buffer: WebGLBuffer
    private readonly res: Resources

    constructor(private readonly scene: Scene) {
        this.res = scene.getResources("BlendDemo")
        this.prg = this.res.createProgram({
            vert: VertexShader,
            frag: FragmentShader,
        })
        this.vao = this.res.createVertexArray()
        const { gl } = scene
        this.buffer = this.res.createBuffer()
        const data = makeData(6 * 3 + 3, {
            attPos: 2,
            attColor: 4,
        })
        initData(data)
        data.push(gl, this.buffer)
        gl.bindVertexArray(this.vao)
        data.defineAttributes(gl, this.prg, this.buffer)
        gl.bindVertexArray(null)
    }

    destroy(): void {
        this.res.deleteBuffer()
        this.res.deleteProgram()
        this.res.deleteVertexArray()
    }

    paint(time: number, delay: number): void {
        const { prg, vao, scene } = this
        const { gl } = scene
        gl.useProgram(prg)
        gl.uniform1f(
            gl.getUniformLocation(prg, "uniPointSize"),
            Math.min(scene.width, scene.height) * 0.2
        )
        gl.bindVertexArray(vao)
        gl.drawArrays(gl.POINTS, 0, 6 * 3)
        gl.disable(gl.BLEND)
        gl.drawArrays(gl.POINTS, 6 * 3, 3)
        gl.bindVertexArray(null)
    }

    update(time: number, delay: number): void {
        // Nothing to update.
    }
}

const SHIFTS = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 0, 2],
    [1, 2, 0],
    [2, 0, 1],
    [2, 1, 0],
]
const x0 = 0
const y0 = 1
const x1 = 0.8660254037844387
const y1 = -0.5
const x2 = -0.8660254037844387
const y2 = -0.5

function initData(data: DataInterface<{ attPos: number; attColor: number }>) {
    const TAU = Math.PI * 2
    const radius1 = 0.6667
    const r = 0.15
    let index = 0
    for (let k = 0; k < 6; k++) {
        const smallAngle = (TAU * k) / 6
        const x = radius1 * Math.cos(smallAngle)
        const y = radius1 * Math.sin(smallAngle)
        const shift = SHIFTS[k]
        data.poke("attPos", [x + x0 * r, y + y0 * r], index + shift[0])
        data.poke("attColor", colorA, index + shift[0])
        data.poke("attPos", [x + x1 * r, y + y1 * r], index + shift[1])
        data.poke("attColor", colorB, index + shift[1])
        data.poke("attPos", [x + x2 * r, y + y2 * r], index + shift[2])
        data.poke("attColor", colorC, index + shift[2])
        index += 3
    }
    data.poke("attPos", [x0 * r, y0 * r], index + 0)
    data.poke("attColor", colorA, index + 0)
    data.poke("attPos", [x1 * r, y1 * r], index + 1)
    data.poke("attColor", colorB, index + 1)
    data.poke("attPos", [x2 * r, y2 * r], index + 2)
    data.poke("attColor", colorC, index + 2)
}
