import { Circumference } from "../../types"
import { cssForGaps } from "./styles"

export interface SpaceStyleProps {
    /** You can use `"XXS"`, `"XS"`, `"S"`, `"M"`, `"L"`, `"XL"`, `"XXL"` or any CSS  unit. */
    borderRadius?: Circumference
    /** You can use `"XXS"`, `"XS"`, `"S"`, `"M"`, `"L"`, `"XL"`, `"XXL"` or any CSS  unit. */
    margin?: Circumference
    /** You can use `"XXS"`, `"XS"`, `"S"`, `"M"`, `"L"`, `"XL"`, `"XXL"` or any CSS  unit. */
    padding?: Circumference
}

export function styleSpace({ borderRadius, margin, padding }: SpaceStyleProps) {
    const style: React.CSSProperties = {}
    if (borderRadius) style.borderRadius = cssForGaps(borderRadius)
    if (margin) style.margin = cssForGaps(margin)
    if (padding) style.padding = cssForGaps(padding)
    return style
}
