export interface DataAttribute {
    dimension: number
    size: number
    type: "float"
}

interface DataDefinition {
    /**
     * dim(float) = 1
     * dim(vec3) = 3
     * dim(mat3) = 9
     */
    dimension: number
    /**
     * size(float) = 1
     * size(float[4]) = 4
     * size(mat9[3]) = 3
     */
    size: number
    /**
     * Number of bytes needed to store each element.
     * For a float, we need 4 bytes.
     */
    bytesPerElement: number
    /**
     * `shift` is expressed in bytes.
     *
     * Since attributes are interleaved, this is where this attribute
     * starts in a vertex. For the first attribute, this is always 0.
     * For the second one, it will be `dimension * size * bytesPerElement`
     * of the previous one.
     */
    shift: number
    /**
     * Used internally to retrieve a number from a DataView depending
     * on the type (float, int, etc.).
     */
    getter(view: DataView, byteOffset: number): number
    /**
     * Used internally to store a number in a DataView depending
     * on the type (float, int, etc.).
     */
    setter(view: DataView, byteOffset: number, value: number): void
}

export interface DataInterface<
    T extends { [key: string]: DataAttribute | number }
> {
    poke(attribName: keyof T, values: number[], vertexIndex?: number): void
    get(): ArrayBuffer
    push(
        gl: WebGL2RenderingContext,
        buffer: WebGLBuffer,
        usage?:
            | "STATIC_DRAW"
            | "DYNAMIC_DRAW"
            | "STREAM_DRAW"
            | "STATIC_READ"
            | "DYNAMIC_READ"
            | "STREAM_READ"
            | "STATIC_COPY"
            | "DYNAMIC_COPY"
            | "STREAM_COPY"
    ): void
    defineAttributes(
        gl: WebGL2RenderingContext,
        prg: WebGLProgram,
        buff: WebGLBuffer,
        divisor?: number
    ): void
}

class Data<T extends { [key: string]: DataAttribute | number }>
    implements DataInterface<T>
{
    public readonly stride
    private readonly buffer: ArrayBuffer
    private readonly definitions: { [key: string]: DataDefinition }

    constructor(def: T, private readonly verticesCount: number) {
        if (verticesCount < 1) {
            throw Error(`The minimum number of vertices for a Data is 1!`)
        }

        let stride = 0
        const definitions: { [key: string]: DataDefinition } = {}
        let totalSize = 0
        for (const key of Object.keys(def)) {
            const dataDef = makeDataDefinition(def[key])
            const size =
                dataDef.bytesPerElement * dataDef.dimension * verticesCount
            totalSize += size
            definitions[key] = dataDef
            dataDef.shift = stride
            stride += dataDef.bytesPerElement * dataDef.dimension
        }
        this.definitions = definitions
        this.stride = stride
        this.buffer = new ArrayBuffer(totalSize)
    }

    /**
     * Set data for a given attribute at a given range of vertices.
     * @param attribName Name of the attribute.
     * @param values Must be an integral multiple of
     * @param vertexIndex Index of the first vertex. (Default to 0)
     */
    poke(attribName: keyof T, values: number[], vertexIndex = 0) {
        const name = attribName as string
        if (vertexIndex < 0)
            throw Error(
                `We were expecting a positive vertex index for attribute ${name} but we got ${vertexIndex}!`
            )
        if (vertexIndex >= this.verticesCount)
            throw Error(
                `Max vertex index for attribute ${name} is ${
                    this.verticesCount - 1
                } but we got ${vertexIndex}!`
            )

        const def = this.definitions[name]
        const elementsCount = def.dimension * def.size
        if (values.length === 0 || values.length % elementsCount !== 0) {
            throw Error(
                `Attribute "${name}" must have a integral multiple of ${elementsCount} numbers, but we got ${values.length}!`
            )
        }

        const loops = Math.floor(values.length / elementsCount)
        if (vertexIndex + loops > this.verticesCount) {
            throw Error(
                `For attribute "${name}" you tried to poke values from index ${vertexIndex} to ${
                    vertexIndex + loops - 1
                } but only ${this.verticesCount} vertices are available!`
            )
        }

        const { stride, buffer } = this
        const view = new DataView(buffer)
        let valueIndex = 0
        for (let index = vertexIndex; index < vertexIndex + loops; index++) {
            let offset = def.shift + stride * index
            for (let elem = 0; elem < elementsCount; elem++) {
                def.setter(view, offset, values[valueIndex++])
                offset += def.bytesPerElement
            }
        }
    }

    /**
     * @returns An interleaved arrayof all atributes.
     */
    get(): ArrayBuffer {
        return this.buffer
    }

    push(
        gl: WebGL2RenderingContext,
        buffer: WebGLBuffer,
        usage:
            | "STATIC_DRAW"
            | "DYNAMIC_DRAW"
            | "STREAM_DRAW"
            | "STATIC_READ"
            | "DYNAMIC_READ"
            | "STREAM_READ"
            | "STATIC_COPY"
            | "DYNAMIC_COPY"
            | "STREAM_COPY" = "STATIC_DRAW"
    ) {
        const usageValue = gl[usage] ?? gl.STATIC_DRAW
        const data = this.buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, data, usageValue)
        return data
    }

    defineAttributes(
        gl: WebGL2RenderingContext,
        prg: WebGLProgram,
        buff: WebGLBuffer,
        divisor = 0
    ) {
        gl.bindBuffer(gl.ARRAY_BUFFER, buff)
        for (const attName of Object.keys(this.definitions)) {
            const def = this.definitions[attName]
            const att = gl.getAttribLocation(prg, attName)
            gl.enableVertexAttribArray(att)
            gl.vertexAttribPointer(
                att,
                def.dimension * def.size,
                gl.FLOAT,
                false,
                this.stride,
                def.shift
            )
            gl.vertexAttribDivisor(att, divisor)
        }
    }
}

export function makeData<T extends { [key: string]: DataAttribute | number }>(
    verticesCount: number,
    def: T
): Data<typeof def> {
    return new Data<typeof def>(def, verticesCount)
}

function makeDataDefinition(attribute: DataAttribute | number): DataDefinition {
    const dataDef: DataAttribute =
        typeof attribute === "number"
            ? {
                  dimension: attribute,
                  size: 1,
                  type: "float",
              }
            : attribute

    switch (dataDef.type) {
        case "float":
            return makeDataDefinitionFloat(dataDef)
        default:
            throw Error(
                `Unable to create a Data for an attribute of type "${dataDef.type}"!`
            )
    }
}

function makeDataDefinitionFloat({
    dimension,
    size,
}: DataAttribute): DataDefinition {
    const bytesPerElement = Float32Array.BYTES_PER_ELEMENT
    return {
        dimension,
        size,
        bytesPerElement,
        // `shift` will be updated in the constructor depending of the other attributes.
        shift: 0,
        getter(view: DataView, byteOffset: number) {
            return view.getFloat32(byteOffset, true)
        },
        setter(view: DataView, byteOffset: number, value: number) {
            view.setFloat32(byteOffset, value, true)
        },
    }
}
