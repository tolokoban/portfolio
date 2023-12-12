import { MoveInterface } from "./types"
export interface MoveJumpOptions {
    /**
     * Time in milliseconds between the start of the jump
     * and its end.
     */
    duration: number
    /**
     * A jump always start at 0 and it reaches its farest point
     * at `height`. This value can be negative.
     */
    height: number
}

export function makeMoveJump(options: Partial<MoveJumpOptions>): MoveInterface {
    const { duration, height } = {
        duration: 300,
        height: 1,
        ...options,
    }
    const radius = height
    const scale = Math.PI / duration

    return (time: number) => radius * Math.abs(Math.sin(time * scale))
}
