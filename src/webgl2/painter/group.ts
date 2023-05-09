import { PainterInterface } from "./painter-interface"

/**
 * Group several painters together.
 */
export default class PainterGroup implements PainterInterface {
    public enabled = true
    private readonly painters: PainterInterface[]

    constructor(painters: PainterInterface[] = []) {
        this.painters = [...painters]
    }

    add(...painters: PainterInterface[]) {
        for (const painter of painters) {
            this.painters.push(painter)
        }
    }

    destroy(): void {
        for (const painter of this.painters) {
            painter.destroy()
        }
        this.painters.splice(0, this.painters.length)
    }

    paint(time: number, delay: number): void {
        if (!this.enabled) return

        for (const painter of this.painters) {
            painter.paint(time, delay)
        }
    }

    update(time: number, delay: number): void {
        if (!this.enabled) return

        for (const painter of this.painters) {
            painter.update(time, delay)
        }
    }
}
