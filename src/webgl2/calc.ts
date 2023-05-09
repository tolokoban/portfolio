export class Vec4 {
    public readonly data: Float32Array

    constructor()
    constructor(vectorToCopy: Vec4)
    constructor(x: number)
    constructor(x: number, y: number)
    constructor(x: number, y: number, z: number)
    constructor(x: number, y: number, z: number, w: number)
    constructor(x?: number | Vec4, y?: number, z?: number, w?: number) {
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

    get z() {
        return this.data[2]
    }
    set z(v: number) {
        this.data[2] = v
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

export class Vec3 {
    public readonly data: Float32Array

    constructor()
    constructor(vectorToCopy: Vec3)
    constructor(x: number)
    constructor(x: number, y: number)
    constructor(x: number, y: number, z: number)
    constructor(x?: number | Vec3, y?: number, z?: number) {
        if (typeof x === "number") {
            this.data = new Float32Array([x, y ?? 0, z ?? 0])
            return
        }
        if (x instanceof Vec3) {
            this.data = new Float32Array(x.data)
            return
        }
        this.data = new Float32Array([0, 0, 0])
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

    get z() {
        return this.data[2]
    }
    set z(v: number) {
        this.data[2] = v
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

export function rotateAroundAxis(
    vector: Vec3 | Vec4,
    axis: Vec3 | Vec4,
    angle: number,
    result: Vec3 | Vec4
) {
    const c = Math.cos(angle)
    const s = Math.sin(angle)
    const [x, y, z] = vector.data
    const [ax, ay, az] = axis.data
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
    const [x, y, z] = vector.data
    result.x = x * c + z * s
    result.y = y
    result.z = -x * s + z * c
}
