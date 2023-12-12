import { BlendFunction } from "@/webgl2/painter/blend"
import Style from "./SelectFunction.module.css"
import { ViewCombo, ViewLabel } from "@/ui/view"

export interface SelectFunctionProps {
    className?: string
    label: string
    value: BlendFunction
    onChange(value: BlendFunction): void
}

export default function SelectFunction({
    className,
    label,
    value,
    onChange,
}: SelectFunctionProps) {
    return (
        <div className={join(className, Style.SelectFunction)}>
            <ViewLabel value={label}>
                <ViewCombo
                    options={{
                        FUNC_ADD: "FUNC_ADD",
                        FUNC_SUBTRACT: "FUNC_SUBTRACT",
                        FUNC_REVERSE_SUBTRACT: "FUNC_REVERSE_SUBTRACT",
                        MIN: "MIN",
                        MAX: "MAX",
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
