import Scene from "../scene/scene"

export interface PainterInterface {
    destroy(): void
    paint(time: number, delay: number): void
    update(time: number, delay: number): void
}
