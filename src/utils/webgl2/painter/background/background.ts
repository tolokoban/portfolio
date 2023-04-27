import Scene from "../../scene"
import { PainterInterface } from "../painter-interface"
import { makeData } from "../../data"
import Resources from "../../scene/resources"

export interface PainterBackgroundOptions {
    image: HTMLImageElement | HTMLCanvasElement
    placeholder: [red: number, green: number, blue: number, alpha: number]
}

export default class PainterBackground implements PainterInterface {
    private readonly options: PainterBackgroundOptions
    private readonly texture: WebGLTexture
    private readonly program: WebGLProgram
    private readonly buffer: WebGLBuffer
    private readonly res: Resources
    private readonly vao: WebGLVertexArrayObject
    private readonly uniTexture: WebGLUniformLocation
    private readonly uniScale: WebGLUniformLocation

    constructor(
        private readonly scene: Scene,
        options: Partial<PainterBackgroundOptions> & {
            image: HTMLImageElement | HTMLCanvasElement
        }
    ) {
        this.res = scene.getResources("PainterBackground")
        this.options = {
            placeholder: [0, 0, 0, 1],
            ...options,
        }
        const { image, placeholder } = this.options
        this.buffer = this.res.createBuffer()
        this.texture = this.res.createTexture()
        scene.texture.bindTexture2D(scene.gl, this.texture, {
            image,
            placeholder,
        })
        this.program = this.res.createProgram({
            vert: VERT,
            frag: FRAG,
        })
        this.uniScale = scene.getUniformLocation(this.program, "uniScale")
        this.uniTexture = scene.getUniformLocation(this.program, "uniTexture")
        const data = makeData(4, {
            attPoint: 2,
            attUV: 2,
        })
        data.poke("attPoint", [-1, +1, +1, +1, -1, -1, +1, -1])
        data.poke("attUV", [0, 0, 1, 0, 0, 1, 1, 1])
        data.push(scene.gl, this.buffer)
        this.vao = createVAO(scene.gl, this.program, this.buffer)
    }

    destroy(): void {
        const { res } = this
        res.deleteProgram()
        res.deteleTexture()
        res.deleteBuffer()
    }

    paint(time: number, delay: number): void {
        const { gl } = this.scene
        const { vao, program, texture } = this
        gl.useProgram(program)
        const { width, height } = this.scene
        gl.uniform2f(
            this.uniScale,
            width > height ? 1 : height / width,
            width > height ? 1 : 1
        )
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.uniform1i(this.uniTexture, 0)
        gl.bindVertexArray(vao)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        gl.bindVertexArray(null)
    }

    update(time: number, delay: number): void {}
}

function createVAO(
    gl: WebGL2RenderingContext,
    prg: WebGLProgram,
    buffVert: WebGLBuffer
): WebGLVertexArrayObject {
    const vao = gl.createVertexArray()
    if (!vao) throw Error("Unable to create a WebGLVertexArrayObject!")
    gl.bindVertexArray(vao)
    gl.bindBuffer(gl.ARRAY_BUFFER, buffVert)
    const $attPoint = gl.getAttribLocation(prg, "attPoint") // float attPoint[2]
    gl.enableVertexAttribArray($attPoint)
    gl.vertexAttribPointer($attPoint, 2, gl.FLOAT, false, 16, 0)
    gl.vertexAttribDivisor($attPoint, 0)
    const $attUV = gl.getAttribLocation(prg, "attUV") // float attUV[2]
    gl.enableVertexAttribArray($attUV)
    gl.vertexAttribPointer($attUV, 2, gl.FLOAT, false, 16, 8)
    gl.vertexAttribDivisor($attUV, 0)
    gl.bindVertexArray(null)
    return vao
}

const VERT = `#version 300 es

uniform vec2 uniScale;
in vec2 attPoint;
in vec2 attUV;
out vec2 varUV;

void main() {
    varUV = attUV;
    float x = uniScale.x * attPoint.x;
    float y = uniScale.y * attPoint.y;
    gl_Position = vec4(x, y, 0.0, 1.0);
}`

const FRAG = `#version 300 es

precision mediump float;

uniform sampler2D uniTexture;
in vec2 varUV;
out vec4 FragColor;

void main() {
    FragColor = texture(uniTexture, varUV);
}`
