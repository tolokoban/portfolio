import { BlendFactor } from "@/utils/webgl2/painter/blend"
import Style from "./SelectFactor.module.css"
import { ViewCombo, ViewLabel } from "@/ui/view"

export interface SelectFactorProps {
    className?: string
    label: string
    value: BlendFactor
    onChange(value: BlendFactor): void
}

export default function SelectFactor({
    className,
    label,
    value,
    onChange,
}: SelectFactorProps) {
    return (
        <div className={join(className, Style.SelectFactor)}>
            <ViewLabel value={label}>
                <ViewCombo
                    options={{
                        ZERO: "ZERO",
                        ONE: "ONE",
                        SRC_COLOR: "SRC_COLOR",
                        ONE_MINUS_SRC_COLOR: "ONE_MINUS_SRC_COLOR",
                        DST_COLOR: "DST_COLOR",
                        ONE_MINUS_DST_COLOR: "ONE_MINUS_DST_COLOR",
                        SRC_ALPHA: "SRC_ALPHA",
                        ONE_MINUS_SRC_ALPHA: "ONE_MINUS_SRC_ALPHA",
                        DST_ALPHA: "DST_ALPHA",
                        ONE_MINUS_DST_ALPHA: "ONE_MINUS_DST_ALPHA",
                        CONSTANT_COLOR: "CONSTANT_COLOR",
                        ONE_MINUS_CONSTANT_COLOR: "ONE_MINUS_CONSTANT_COLOR",
                        CONSTANT_ALPHA: "CONSTANT_ALPHA",
                        ONE_MINUS_CONSTANT_ALPHA: "ONE_MINUS_CONSTANT_ALPHA",
                        SRC_ALPHA_SATURATE: "SRC_ALPHA_SATURATE",
                    }}
                    value={value}
                    onChange={onChange}
                />
            </ViewLabel>
        </div>
    )
}

function join(...classes: unknown[]): string {
    return classes.filter((cls) => typeof cls === "string").join(" ")
}
