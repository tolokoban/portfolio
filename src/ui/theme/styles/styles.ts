import { colord } from "colord"
import {
    Circumference,
    HslColorValue,
    OpaqueColorName,
    isHslColorValue,
} from "../../types"

export function cssForColor(
    name: OpaqueColorName | HslColorValue,
    alpha = 1
): string {
    if (alpha <= 0) return "transparent"
    if (isHslColorValue(name)) {
        if (alpha >= 1) return name
        return colord(name).alpha(alpha).toHslString()
    }
    if (alpha >= 1) return `var(--theme-color-${name})`
    return `var(--theme-color-${name}-${toOpacity(alpha)})`
}

export function cssForColorOn(name: OpaqueColorName | HslColorValue): string {
    if (isHslColorValue(name)) {
        return colord(name).isDark()
            ? "var(--theme-color-text-light)"
            : "var(--theme-color-text-dark)"
    }
    return `var(--theme-color-on-${name})`
}

export function cssForGaps(params: Circumference, unit = "em") {
    if (!Array.isArray(params)) return cssForGap(params, unit)
    return params.map((item) => cssForGap(item, unit)).join(" ")
}

function cssForGap(item: string | number, unit = "em") {
    if (typeof item === "number") return `${item}${unit}`

    switch (item) {
        case "XXS":
        case "XS":
        case "S":
        case "M":
        case "L":
        case "XL":
        case "XXL":
            return `var(--theme-gap-${item})`
        default:
            return item
    }
}

function toOpacity(alpha: number): string {
    const opacity = Math.round(alpha * 10)
    if (opacity < 1) return "1"
    if (opacity > 9) return "9"
    return `${opacity}`
}
