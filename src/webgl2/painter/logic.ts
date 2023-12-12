import Scene from "../scene"
import { PainterInterface } from "./painter-interface"

/**
 * This painter paints nothing but execute some logic at every frame.
 */
export default class PainterLogic implements PainterInterface {
    constructor(
        private readonly logicFunction: (time: number, delay: number) => void
    ) {}

    destroy(): void {}

    paint(time: number, delay: number): void {}

    update(time: number, delay: number): void {
        this.logicFunction(time, delay)
    }
}
