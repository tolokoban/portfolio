import { TgdAssetImage } from "../../types"

export interface OptionsTexture2D {
    image: HTMLImageElement | HTMLCanvasElement
    placeholder: [red: number, green: number, green: number, alpha: number]
}

export default class TextureHelper {
    constructor(private readonly gl: WebGL2RenderingContext) {}

    loadTextureCubeMap(texture: WebGLTexture, image: TgdAssetImage) {
        const { gl } = this
        image.isSuccessfullyLoaded.then(() => {
            gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture)
            gl.texImage2D(
                gl.TEXTURE_CUBE_MAP_POSITIVE_X,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                cutFromSkyBox(image.data, 2, 1)
            )
            gl.texImage2D(
                gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                cutFromSkyBox(image.data, 0, 1)
            )
            gl.texImage2D(
                gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                cutFromSkyBox(image.data, 1, 0)
            )
            gl.texImage2D(
                gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                cutFromSkyBox(image.data, 1, 2)
            )
            gl.texImage2D(
                gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                cutFromSkyBox(image.data, 1, 1)
            )
            gl.texImage2D(
                gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                cutFromSkyBox(image.data, 3, 1)
            )
            gl.generateMipmap(gl.TEXTURE_CUBE_MAP)
            gl.texParameteri(
                gl.TEXTURE_CUBE_MAP,
                gl.TEXTURE_MIN_FILTER,
                gl.LINEAR_MIPMAP_LINEAR
            )
        })
    }

    loadTexture2D(
        texture: WebGLTexture,
        {
            image,
            placeholder = [0, 0, 0, 1],
        }: Partial<OptionsTexture2D> & {
            image: HTMLImageElement | HTMLCanvasElement
        }
    ) {
        const { gl } = this
        gl.bindTexture(gl.TEXTURE_2D, texture)
        const level = 0
        const internalFormat = gl.RGBA
        const width = 1
        const height = 1
        const border = 0
        const srcFormat = gl.RGBA
        const srcType = gl.UNSIGNED_BYTE
        const pixel = new Uint8Array(placeholder)
        gl.texImage2D(
            gl.TEXTURE_2D,
            level,
            internalFormat,
            width,
            height,
            border,
            srcFormat,
            srcType,
            pixel
        )
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
        const update = () => {
            gl.texImage2D(
                gl.TEXTURE_2D,
                0,
                gl.RGBA,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                image
            )
        }
        update()
        if (typeof image.addEventListener === "function") {
            image.addEventListener("load", update)
        }
    }
}

function cutFromSkyBox(
    image: HTMLImageElement | HTMLCanvasElement,
    col: number,
    row: number
): HTMLCanvasElement {
    const w = image.width / 4
    const h = image.height / 3
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext("2d")
    if (!ctx) throw Error("Unable to create context 2D!")

    ctx.drawImage(image, -col * w, -row * h)
    document.body.appendChild(canvas)
    return canvas
}
