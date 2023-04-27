export type ThemeSize = "none" | "XS" | "S" | "M" | "L" | "XL"

export interface ViewWithValue<T> {
    value: T
    onChange?(this: void, value: T): void
}

export type ThemeColor =
    | string[]
    | {
          hue: number | [number, number]
          chroma?: number | [number, number]
          lightness?: number | [number, number]
      }

interface ThemeSettingsColors {
    textLight: string
    textDark: string
    primary: ThemeColor
    secondary: ThemeColor
    tertiary: ThemeColor
    neutral: ThemeColor
    input: string
    error: string
    valid: string
}

export interface ThemeSettings {
    colors?: Partial<ThemeSettingsColors>
    gap?: {
        XS: string
        S: string
        M: string
        L: string
        XL: string
    }
}

type ColorLevel = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type ColorAlpha = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type ColorBase = "neutral" | "primary" | "secondary" | "tertiary"

export type ColorName =
    | OpaqueColorName
    | `${ColorBase}-${ColorLevel}-${ColorAlpha}`
    | `on-${ColorBase}-${ColorLevel}-${ColorAlpha}`

export type OpaqueColorName =
    | `${ColorBase}-${ColorLevel}`
    | `on-${ColorBase}-${ColorLevel}`
    | "error"
    | "on-error"

export type Circumference =
    | string
    | number
    | [vertical: string | number, horizontal: string | number]
    | [
          top: string | number,
          right: string | number,
          bottom: string | number,
          left: string | number
      ]
