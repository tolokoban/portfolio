export interface OptionsTexture2D {
    image: HTMLImageElement | HTMLCanvasElement
    placeholder: [red: number, green: number, green: number, alpha: number]
}

export default class TextureHelper {
    constructor(private readonly gl: WebGL2RenderingContext) {}

    bindTexture2D(
        gl: WebGL2RenderingContext,
        texture: WebGLTexture,
        {
            image,
            placeholder = [0, 0, 0, 1],
        }: Partial<OptionsTexture2D> & {
            image: HTMLImageElement | HTMLCanvasElement
        }
    ) {
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
