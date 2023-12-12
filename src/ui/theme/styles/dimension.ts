export interface DimensionStyleProps {
    /** CSS width. */
    width?: string
    /** CSS height. */
    height?: string
    /** CSS maxWidth. */
    maxWidth?: string
    /** CSS maxHeight. */
    maxHeight?: string
    /** CSS minWidth. */
    minWidth?: string
    /** CSS minHeight. */
    minHeight?: string
}

export function styleDimension({
    width,
    height,
    maxWidth = "100vw",
    maxHeight,
    minWidth,
    minHeight,
}: DimensionStyleProps) {
    const style: React.CSSProperties = {
        width,
        height,
        maxWidth,
        maxHeight,
        minWidth,
        minHeight,
    }
    return style
}
