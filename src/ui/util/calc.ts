/**
 * Ensure `value` is between `min` and `max` included.
 * @param value
 * @param min Default to 0.
 * @param max Default to 1.
 */
export function clamp(value: number, min = 0, max = 1): number {
    if (value < min) return min
    if (value > max) return max
    return value
}
