export class Vec2 {
    /**
     * @param angle Radians.
     */
    static fromPolar(angle: number, radius: number): Vec2 {
        return new Vec2(radius * Math.cos(angle), radius * Math.sin(angle))
    }

    static fromSubtract(vecA: Vec2, vecB: Vec2): Vec2 {
        return new Vec2(vecA.x - vecB.x, vecA.y - vecB.y)
    }

    protected readonly data = new Float32Array(4)

    constructor()
    constructor(vectorToCopy: Vec2)
    constructor(x: number)
    constructor(x: number, y: number)
    constructor(x?: number | Vec2, y?: number) {
        if (typeof x === "number") {
            this.data = new Float32Array([x, y ?? 0])
            return
        }
        if (x instanceof Vec2) {
            this.data = new Float32Array(x.data)
            return
        }
    }

    get xy() {
        return this.data.subarray(0, 2)
    }

    get x() {
        return this.data[0]
    }
    set x(v: number) {
        this.data[0] = v
    }

    get y() {
        return this.data[1]
    }
    set y(v: number) {
        this.data[1] = v
    }

    setUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation) {
        gl.uniform3fv(location, this.data)
    }

    lengthSquare() {
        const [x, y] = this.data
        return x * x + y * y
    }

    length() {
        return Math.sqrt(this.lengthSquare())
    }

    normalize(): Vec2 {
        const len = this.lengthSquare()
        const factor = len > 1e-12 ? 1 / Math.sqrt(len) : 0
        this.x *= factor
        this.y *= factor
        return this
    }
}

export class Vec3 extends Vec2 {
    /**
     * @param angle Radians.
     */
    static fromPolar(angle: number, radius: number, z = 0): Vec3 {
        return new Vec3(radius * Math.cos(angle), radius * Math.sin(angle), z)
    }

    static fromSubtract(vecA: Vec3, vecB: Vec3): Vec3 {
        return new Vec3(vecA.x - vecB.x, vecA.y - vecB.y, vecA.z - vecB.z)
    }

    constructor()
    constructor(vectorToCopy: Vec3)
    constructor(x: number)
    constructor(x: number, y: number)
    constructor(x: number, y: number, z: number)
    constructor(x?: number | Vec3, y?: number, z?: number) {
        super()
        if (typeof x === "number") {
            this.data[0] = x
            this.data[1] = y ?? 0
            this.data[2] = z ?? 0
            return
        }
        if (x instanceof Vec3) {
            this.data.set(x.data)
        }
    }

    get xyz() {
        return this.data.subarray(0, 3)
    }

    get z() {
        return this.data[2]
    }
    set z(v: number) {
        this.data[2] = v
    }

    add(...vectors: Vec3[]): Vec3 {
        for (const vec of vectors) {
            this.x += vec.x
            this.y += vec.y
            this.z += vec.z
        }
        return this
    }

    distance(vec: Vec3): number {
        const x = this.x - vec.x
        const y = this.y - vec.y
        const z = this.z - vec.z
        return Math.sqrt(x * x + y * y + z * z)
    }

    dot(vec: Vec3): number {
        const x = this.x * vec.x
        const y = this.y * vec.y
        const z = this.z * vec.z
        return x * x + y * y + z * z
    }

    clone() {
        return new Vec3(this)
    }

    scale(scaleFactor: number): Vec3 {
        this.x *= scaleFactor
        this.y *= scaleFactor
        this.z *= scaleFactor
        return this
    }

    setUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation) {
        gl.uniform3fv(location, this.data)
    }

    lengthSquare() {
        const [x, y, z] = this.data
        return x * x + y * y + z * z
    }

    length() {
        return Math.sqrt(this.lengthSquare())
    }

    normalize(): Vec3 {
        const len = this.lengthSquare()
        const factor = len > 1e-12 ? 1 / Math.sqrt(len) : 0
        this.x *= factor
        this.y *= factor
        this.z *= factor
        return this
    }
}

export class Vec4 extends Vec3 {
    public readonly data: Float32Array

    constructor()
    constructor(vectorToCopy: Vec4)
    constructor(x: number)
    constructor(x: number, y: number)
    constructor(x: number, y: number, z: number)
    constructor(x: number, y: number, z: number, w: number)
    constructor(x?: number | Vec4, y?: number, z?: number, w?: number) {
        super()
        if (typeof x === "number") {
            this.data = new Float32Array([x, y ?? 0, z ?? 0, w ?? 1])
            return
        }
        if (x instanceof Vec4) {
            this.data = new Float32Array(x.data)
            return
        }
        this.data = new Float32Array([0, 0, 0, 1])
    }

    get w() {
        return this.data[3]
    }
    set w(v: number) {
        this.data[3] = v
    }

    setUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation) {
        gl.uniform4fv(location, this.data)
    }

    lengthSquare() {
        const [x, y, z, w] = this.data
        return x * x + y * y + z * z + w * w
    }

    length() {
        return Math.sqrt(this.lengthSquare())
    }

    normalize(): Vec4 {
        const len = this.lengthSquare()
        const factor = len > 1e-12 ? 1 / Math.sqrt(len) : 0
        this.x *= factor
        this.y *= factor
        this.z *= factor
        this.w *= factor
        return this
    }
}

// prettier-ignore
const MAT4_IDENTITY = new Float32Array([
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
])

export class Mat4 {
    private readonly data = new Float32Array(MAT4_IDENTITY)

    setUniform(gl: WebGL2RenderingContext, location: WebGLUniformLocation) {
        gl.uniformMatrix4fv(location, false, this.data)
    }

    get m00() {
        return this.data[0]
    }
    set m00(v: number) {
        this.data[0] = v
    }

    get m01() {
        return this.data[1]
    }
    set m01(v: number) {
        this.data[1] = v
    }

    get m02() {
        return this.data[2]
    }
    set m02(v: number) {
        this.data[2] = v
    }

    get m03() {
        return this.data[3]
    }
    set m03(v: number) {
        this.data[3] = v
    }

    get m10() {
        return this.data[4]
    }
    set m10(v: number) {
        this.data[4] = v
    }

    get m11() {
        return this.data[5]
    }
    set m11(v: number) {
        this.data[5] = v
    }

    get m12() {
        return this.data[6]
    }
    set m12(v: number) {
        this.data[6] = v
    }

    get m13() {
        return this.data[7]
    }
    set m13(v: number) {
        this.data[7] = v
    }

    get m20() {
        return this.data[8]
    }
    set m20(v: number) {
        this.data[8] = v
    }

    get m21() {
        return this.data[9]
    }
    set m21(v: number) {
        this.data[9] = v
    }

    get m22() {
        return this.data[10]
    }
    set m22(v: number) {
        this.data[10] = v
    }

    get m23() {
        return this.data[11]
    }
    set m23(v: number) {
        this.data[11] = v
    }

    get m30() {
        return this.data[12]
    }
    set m30(v: number) {
        this.data[12] = v
    }

    get m31() {
        return this.data[13]
    }
    set m31(v: number) {
        this.data[13] = v
    }

    get m32() {
        return this.data[14]
    }
    set m32(v: number) {
        this.data[14] = v
    }

    get m33() {
        return this.data[15]
    }
    set m33(v: number) {
        this.data[15] = v
    }

    debug() {
        const maxLen = this.data.reduce(
            (prv, cur) => Math.max(prv, cur.toFixed(3).length),
            0
        )
        const pad = (num: number) => {
            let out = num.toFixed(3)
            while (out.length < maxLen) out = ` ${out}`
            return ` ${out} `
        }
        const css =
            "display:inline-block;font-size:100%;font-family:monospace;color:#fff;line-height:3em;"
        const css1 = `${css}background:#000`
        const css2 = `${css}background:#333`
        const cssL = "display:block;line-height:0;margin:0;padding:0;"
        console.log(
            `%c${pad(this.m00)}%c${pad(this.m01)}%c${pad(this.m02)}%c${pad(
                this.m03
            )}%c\n%c${pad(this.m10)}%c${pad(this.m11)}%c${pad(this.m12)}%c${pad(
                this.m13
            )}%c\n%c${pad(this.m20)}%c${pad(this.m21)}%c${pad(this.m22)}%c${pad(
                this.m23
            )}%c\n%c${pad(this.m30)}%c${pad(this.m31)}%c${pad(this.m32)}%c${pad(
                this.m33
            )}`,
            css1,
            css2,
            css1,
            css2,
            cssL,
            css2,
            css1,
            css2,
            css1,
            cssL,
            css1,
            css2,
            css1,
            css2,
            cssL,
            css2,
            css1,
            css2,
            css1
        )
    }
}

export function rotateAroundAxis(
    vector: Vec3 | Vec4,
    axis: Vec3 | Vec4,
    angle: number,
    result: Vec3 | Vec4
) {
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    const { x, y, z } = vector
    const { x: ax, y: ay, z: az } = axis
    const axx = ax * ax
    const axy = ax * ay
    const axz = ax * az
    const ayy = ay * ay
    const ayz = ay * az
    const azz = az * az
    result.x =
        x * (c + (1 - c) * axx) +
        y * ((1 - c) * axy - s * az) +
        z * ((1 - c) * axz + s * ay)
    result.y =
        x * ((1 - c) * axy + s * az) +
        y * (c + (1 - c) * ayy) +
        z * ((1 - c) * ayz - s * ax)
    result.z =
        x * ((1 - c) * axz - s * ay) +
        y * ((1 - c) * ayz + s * ax) +
        z * (c + (1 - c) * azz)
}

export function rotateAroundY(
    vector: Vec3 | Vec4,
    angle: number,
    result: Vec3 | Vec4
) {
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    const { x, y, z } = vector
    result.x = x * c + z * s
    result.y = y
    result.z = -x * s + z * c
}
