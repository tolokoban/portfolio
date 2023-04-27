export interface TgdAssetImage {
    readonly type: "TgdAssetImage"
    readonly key: string
    readonly image: HTMLImageElement
    readonly isSuccessfullyLoaded: Promise<boolean>
}

export interface TgdTexture {
    readonly type: "TgdTexture"
    readonly key: string
    readonly texture: WebGLTexture
}

export interface TgdProgram {
    readonly type: "TgdProgram"
    readonly key: string
    readonly program: WebGLProgram
    use(): void
}
