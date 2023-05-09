import Scene from "../scene/scene"
import { PainterInterface } from "./painter-interface"

export interface PainterBlendOptions {
    enabled?: boolean
    factorSrcColor?: BlendFactor
    factorSrcAlpha?: BlendFactor
    factorDstColor?: BlendFactor
    factorDstAlpha?: BlendFactor
    functionColor?: BlendFunction
    functionAlpha?: BlendFunction
}

export type BlendFactor =
    | "ZERO" // 	0,0,0,0 	Multiplies all colors by 0.
    | "ONE" // 	1,1,1,1 	Multiplies all colors by 1.
    | "SRC_COLOR" // 	RS, GS, BS, AS 	Multiplies all colors by the source colors.
    | "ONE_MINUS_SRC_COLOR" // 	1-RS, 1-GS, 1-BS, 1-AS 	Multiplies all colors by 1 minus each source color.
    | "DST_COLOR" // 	RD, GD, BD, AD 	Multiplies all colors by the destination color.
    | "ONE_MINUS_DST_COLOR" // 	1-RD, 1-GD, 1-BD, 1-AD 	Multiplies all colors by 1 minus each destination color.
    | "SRC_ALPHA" // 	AS, AS, AS, AS 	Multiplies all colors by the source alpha value.
    | "ONE_MINUS_SRC_ALPHA" // 	1-AS, 1-AS, 1-AS, 1-AS 	Multiplies all colors by 1 minus the source alpha value.
    | "DST_ALPHA" // 	AD, AD, AD, AD 	Multiplies all colors by the destination alpha value.
    | "ONE_MINUS_DST_ALPHA" // 	1-AD, 1-AD, 1-AD, 1-AD 	Multiplies all colors by 1 minus the destination alpha value.
    | "CONSTANT_COLOR" // 	RC, GC, BC, AC 	Multiplies all colors by a constant color.
    | "ONE_MINUS_CONSTANT_COLOR" // 	1-RC, 1-GC, 1-BC, 1-AC 	Multiplies all colors by 1 minus a constant color.
    | "CONSTANT_ALPHA" // 	AC, AC, AC, AC 	Multiplies all colors by a constant alpha value.
    | "ONE_MINUS_CONSTANT_ALPHA" // 	1-AC, 1-AC, 1-AC, 1-AC 	Multiplies all colors by 1 minus a constant alpha value.
    | "SRC_ALPHA_SATURATE" // 	min(AS, 1 - AD), min(AS, 1 - AD), min(AS, 1 - AD), 1 	Multiplies the RGB colors by the smaller of either the source alpha value or the value of 1 minus the destination alpha value. The alpha value is multiplied by 1.

export type BlendFunction =
    | "FUNC_ADD"
    | "FUNC_SUBTRACT"
    | "FUNC_REVERSE_SUBTRACT"
    | "MIN"
    | "MAX"

export default class PainterBlend implements PainterInterface {
    public enabled = false
    public factorSrcColor: BlendFactor = "ONE"
    public factorSrcAlpha: BlendFactor = "ONE"
    public factorDstColor: BlendFactor = "ONE"
    public factorDstAlpha: BlendFactor = "ONE"
    public functionColor: BlendFunction = "FUNC_ADD"
    public functionAlpha: BlendFunction = "FUNC_ADD"

    constructor(
        private readonly scene: Scene,
        options: Partial<PainterBlendOptions>
    ) {
        if (options.enabled) this.enabled = options.enabled
        if (options.factorSrcColor) this.factorSrcColor = options.factorSrcColor
        if (options.factorSrcAlpha) this.factorSrcAlpha = options.factorSrcAlpha
        if (options.factorDstColor) this.factorDstColor = options.factorDstColor
        if (options.factorDstAlpha) this.factorDstAlpha = options.factorDstAlpha
        if (options.functionColor) this.functionColor = options.functionColor
        if (options.functionAlpha) this.functionAlpha = options.functionAlpha
    }

    /** Nothing to destroy. */
    destroy(): void {}

    paint(_time: number, _delay: number): void {
        const {
            scene,
            enabled,
            factorDstAlpha,
            factorDstColor,
            factorSrcAlpha,
            factorSrcColor,
            functionAlpha,
            functionColor,
        } = this
        const { gl } = scene
        if (!enabled) {
            gl.disable(gl.BLEND)
            return
        }
        gl.enable(gl.BLEND)
        gl.blendEquationSeparate(gl[functionColor], gl[functionAlpha])
        gl.blendFuncSeparate(
            gl[factorSrcColor],
            gl[factorDstColor],
            gl[factorSrcAlpha],
            gl[factorDstAlpha]
        )
    }

    update(_time: number, _delay: number): void {}
}
