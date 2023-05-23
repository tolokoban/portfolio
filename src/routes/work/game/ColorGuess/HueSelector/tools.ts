import { clamp } from "@/webgl2/calc"

export function range(size: number): number[] {
    const result: number[] = []
    for (let i = 0; i < size; i++) result.push(i)
    return result
}

/**
 * Let's imagine `steps === 6` then you will have this relations:
 * ```
 * | Step | 0 |  1 |   2 |   3 |   4 |   5 |
 * | Hue  | 0 | 60 | 120 | 180 | 240 | 300 |
 * | %    | 0 | 20 |  40 |  60 |  80 | 100 |
 * ```
 * @param hue Integer between 0 and 359 (included).
 * @param steps Number of steps to snap on.
 * @return Float between 0 and 1 (included).
 */
export function hue2percent(hue: number, steps: number): number {
    const maxHue = Math.floor((360 * (steps - 1)) / steps)
    const clampedHue = clamp(hue, 0, maxHue)
    const snappedHue = Math.floor(
        (360 * Math.floor((steps * clampedHue) / 360)) / steps
    )
    return snappedHue / maxHue
}

export function percent2hue(percent: number, steps: number): number {
    const maxHue = Math.floor((360 * (steps - 1)) / steps)
    const snappedPercent = Math.floor(percent * (steps - 1)) / (steps - 1)
    return Math.round(snappedPercent * maxHue)
}

export function snapHue(hue: number, steps: number): number {
    return percent2hue(hue2percent(hue, steps), steps)
}
