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
 * @param value Integer between 0 and `maxValue` (included).
 * @param steps Number of steps to snap on.
 * @return Float between 0 and 1 (included).
 */
export function value2percent(
    value: number,
    maxValue: number,
    steps: number,
    minStep: number,
    maxStep: number
): number {
    const lowerBound = Math.floor(((maxValue + 1) * minStep) / (steps - 1))
    const upperBound = Math.floor(((maxValue + 1) * maxStep) / (steps - 1))
    const clampedValue = clamp(value, lowerBound, upperBound)
    const valueSpan = upperBound - lowerBound
    const valueStep = (maxValue + 1) / (steps - 1)
    const index = Math.round(clampedValue / valueStep)
    const snappedValue = Math.round(((maxValue + 1) * index) / (steps - 1))
    return (snappedValue - lowerBound) / valueSpan
}

/**
 * We should have `percent2value(0) === valueAt(minStep)`
 * and `percent2value(1) === valueAt(maxStep)`.
 * @param percent
 * @param maxValue
 * @param steps
 * @param minStep
 * @param maxStep
 * @returns
 */
export function percent2value(
    percent: number,
    maxValue: number,
    steps: number,
    minStep: number,
    maxStep: number
): number {
    const stepSpan = maxStep - minStep
    const index = minStep + Math.round(percent * stepSpan)
    return Math.floor(((maxValue + 1) * index) / (steps - 1))
}

export function snapValue(
    value: number,
    maxValue: number,
    steps: number,
    minStep: number,
    maxStep: number
): number {
    return percent2value(
        value2percent(value, maxValue, steps, minStep, maxStep),
        maxValue,
        steps,
        minStep,
        maxStep
    )
}
