import {
    TgdContext,
    TgdMaterialNormals,
    TgdPainterMesh,
    TgdParserGLTransfertFormatBinary,
} from "@tolokoban/tgd"

export interface MugPainterOptions {
    asset: TgdParserGLTransfertFormatBinary
}

export function makeMugPainter(
    context: TgdContext,
    options: MugPainterOptions
) {
    const { asset } = options
    const geometry = asset.makeGeometry()
    const material = new TgdMaterialNormals()
    const painter = new TgdPainterMesh(context, {
        name: "MugPainter",
        geometry,
        material,
    })
    return painter
}
