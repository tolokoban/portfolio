import { clamp } from "../calc"
import { MoveInterface } from "./types"

interface MoveCubicBezierOptions {
    /**
     * Time in milliseconds between the start of the movement
     * and its end.
     */
    duration: number
    /**
     * A movement result is always clamped between 0 and `height`.
     * This value can be negative.
     */
    height: number
    /**
     * Control points in a normalized space (all coords are between 0 and 1).
     */
    controls: [x0: number, y0: number, x1: number, y1: number]
}

const PRECISION = 1024

export function makeMoveCubicBezier({
    duration = 300,
    height = 1,
    controls = [0.25, 0.1, 0.25, 1.0],
}: Partial<MoveCubicBezierOptions>): MoveInterface {
    const scaleTime = 1 / duration
    const [x1, c1y, x2, c2y] = controls
    const c1x = clamp(x1)
    const c2x = clamp(x2)
    const data = new Float32Array(PRECISION + 2)
    data[0] = 0
    data[PRECISION] = 1
    data[PRECISION + 1] = 1
    // fillBezierTable(
    //     data,
    //     0,
    //     PRECISION,
    //     (t: mnumber) => {

    //     }
    // )
    return (time: number) => {
        const t = clamp(time * scaleTime)
        const index = Math.floor(PRECISION * t)
        const a = PRECISION * t - index
        const v1 = data[index]
        const v2 = data[index + 1]
        return v1 * (1 - a) + v2 * a
    }
}
