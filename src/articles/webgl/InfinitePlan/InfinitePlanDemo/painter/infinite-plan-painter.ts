import { Vec3, rotateAroundAxis, rotateAroundY } from "@/utils/webgl2/calc"
import { DataInterface, makeData } from "@/utils/webgl2/data"
import { PainterInterface } from "@/utils/webgl2/painter/painter-interface"
import Scene from "@/utils/webgl2/scene"
import Resources from "@/utils/webgl2/scene/resources"
import FragmentShader from "./infinite-plan-painter.frag"
import VertexShader from "./infinite-plan-painter.vert"

export default class InfinitePlanPainter implements PainterInterface {
    private readonly vao: WebGLVertexArrayObject
    private readonly prg: WebGLProgram
    private readonly buffer: WebGLBuffer
    private readonly res: Resources
    private readonly data: DataInterface<{ attRay: number }>
    private readonly axisX = new Vec3(1, 0, 0)
    private readonly axisY = new Vec3(0, 1, 0)
    private readonly axisZ = new Vec3(0, 0, 1)
    private readonly rotatedAxisX = new Vec3(0)
    private readonly rotatedAxisY = new Vec3(0)
    private readonly rotatedAxisZ = new Vec3(0)
    private cameraOrientation: number[] = [1, 0, 0, 0, 1, 0, 0, 0, 1]

    constructor(private readonly scene: Scene) {
        this.res = scene.getResources("BlendDemo")
        this.prg = this.res.createProgram({
            vert: VertexShader,
            frag: FragmentShader,
        })
        this.vao = this.res.createVertexArray()
        const { gl } = scene
        this.buffer = this.res.createBuffer()
        this.data = makeData(4, { attRay: 2 })
        this.data.poke("attRay", [1, 1, 1, -1, -1, -1, -1, 1])
        this.data.push(scene.gl, this.buffer)
        this.setOrientation(0, 0)
        gl.bindVertexArray(this.vao)
        this.data.defineAttributes(gl, this.prg, this.buffer)
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
        gl.uniformMatrix3fv(
            gl.getUniformLocation(prg, "uniCameraOrientation"),
            false,
            this.cameraOrientation
        )
        gl.bindVertexArray(vao)
        gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
        gl.bindVertexArray(null)
    }

    update(time: number, delay: number): void {
        // Nothing to update.
    }

    setOrientation(pitch: number, roll: number) {
        const {
            axisX,
            axisY,
            axisZ,
            rotatedAxisX,
            rotatedAxisY,
            rotatedAxisZ,
        } = this
        rotateAroundY(axisX, pitch, rotatedAxisX)
        rotateAroundY(axisY, pitch, rotatedAxisY)
        rotateAroundY(axisZ, pitch, rotatedAxisZ)
        const axis = new Vec3(0)
        rotateAroundY(new Vec3(1, 0, 0), pitch, axis)
        rotateAroundAxis(rotatedAxisX, axis, roll, rotatedAxisX)
        rotateAroundAxis(rotatedAxisY, axis, roll, rotatedAxisY)
        rotateAroundAxis(rotatedAxisZ, axis, roll, rotatedAxisZ)
        this.cameraOrientation = [
            rotatedAxisX.x,
            rotatedAxisX.y,
            rotatedAxisX.z,
            rotatedAxisY.x,
            rotatedAxisY.y,
            rotatedAxisY.z,
            rotatedAxisZ.x,
            rotatedAxisZ.y,
            rotatedAxisZ.z,
        ]
    }
}
