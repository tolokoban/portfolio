import Resources from "../../scene/resources"
import { PainterInterface } from "./../painter-interface"
import VERT from "./sprites-painter.vert"
import FRAG from "./sprites-painter.frag"
import Scene from "../../scene"

export default class SpritesPainter implements PainterInterface {
    private readonly vao: WebGLVertexArrayObject
    private readonly prg: WebGLProgram

    constructor(
        private readonly gl: WebGL2RenderingContext,
        private readonly image: HTMLImageElement | HTMLCanvasElement
    ) {
        const res = Resources.make(gl, "SpritesPainter")
        const buffVert = res.createBuffer("buffVert")
        const buffInstDynamic = res.createBuffer("buffInstDynamic")
        const prg = res.createProgram({ vert: VERT, frag: FRAG })
        this.vao = createVAO(gl, prg, buffVert, buffInstDynamic)
        this.prg = prg
    }

    initialize(scene: Scene): Promise<boolean> {
        throw new Error("Method not implemented.")
    }

    destroy(): void {
        throw new Error("Method not implemented.")
    }

    paint(time: number, delay: number): void {
        throw new Error("Method not implemented.")
    }

    update(time: number, delay: number): void {
        throw new Error("Method not implemented.")
    }
}

function createVAO(
    gl: WebGL2RenderingContext,
    prg: WebGLProgram,
    buffVert: WebGLBuffer,
    buffInstDynamic: WebGLBuffer
): WebGLVertexArrayObject {
    const vao = gl.createVertexArray()
    if (!vao) throw Error("Unable to create a WebGLVertexArrayObject!")
    gl.bindVertexArray(vao)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffVert)
    const $attPoint = gl.getAttribLocation(prg, "attPoint") // float attPoint[2]
    gl.enableVertexAttribArray($attPoint)
    gl.vertexAttribPointer($attPoint, 2, gl.FLOAT, false, 8, 0)
    gl.vertexAttribDivisor($attPoint, 0)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffInstDynamic)
    const $attPosition = gl.getAttribLocation(prg, "attPosition") // float attPosition[3]
    gl.enableVertexAttribArray($attPosition)
    gl.vertexAttribPointer($attPosition, 3, gl.FLOAT, false, 52, 0)
    gl.vertexAttribDivisor($attPosition, 1)
    const $attAtlasWH = gl.getAttribLocation(prg, "attAtlasWH") // float attAtlasWH[2]
    gl.enableVertexAttribArray($attAtlasWH)
    gl.vertexAttribPointer($attAtlasWH, 2, gl.FLOAT, false, 52, 12)
    gl.vertexAttribDivisor($attAtlasWH, 1)
    const $attTransform = gl.getAttribLocation(prg, "attTransform") // float attTransform[4]
    gl.enableVertexAttribArray($attTransform)
    gl.vertexAttribPointer($attTransform, 4, gl.FLOAT, false, 52, 20)
    gl.vertexAttribDivisor($attTransform, 1)
    const $attAtlasXY = gl.getAttribLocation(prg, "attAtlasXY") // float attAtlasXY[2]
    gl.enableVertexAttribArray($attAtlasXY)
    gl.vertexAttribPointer($attAtlasXY, 2, gl.FLOAT, false, 52, 36)
    gl.vertexAttribDivisor($attAtlasXY, 1)
    const $attCenter = gl.getAttribLocation(prg, "attCenter") // float attCenter[2]
    gl.enableVertexAttribArray($attCenter)
    gl.vertexAttribPointer($attCenter, 2, gl.FLOAT, false, 52, 44)
    gl.vertexAttribDivisor($attCenter, 1)
    gl.bindVertexArray(null)
    return vao
}
