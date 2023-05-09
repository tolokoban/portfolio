import GenericEvent from "../generic-event"

export interface PointerState {
    realX: number
    realY: number
    x: number
    y: number
    button: number
    id: number
    timestamp: number
}

interface PointerHistory {
    first: PointerState
    previous: PointerState
}

export interface PointerMoveState extends PointerHistory {
    current: PointerState
}

export default class Gestures {
    public eventDown = new GenericEvent<PointerState>()
    public eventDrag = new GenericEvent<PointerMoveState>()
    public eventUp = new GenericEvent<PointerMoveState>()
    public eventZoom = new GenericEvent<number>()

    private readonly pointers = new Map<number, PointerHistory>()

    attach(canvas: HTMLCanvasElement) {
        canvas.addEventListener("pointerdown", this.handlePointerDown)
        canvas.addEventListener("pointerup", this.handlePointerUp)
        canvas.addEventListener("pointermove", this.handlePointerMove)
        canvas.addEventListener("wheel", this.handleWheel)
    }

    detach(canvas: HTMLElement) {
        canvas.removeEventListener("pointerdown", this.handlePointerDown)
        canvas.removeEventListener("pointerup", this.handlePointerUp)
        canvas.removeEventListener("pointermove", this.handlePointerMove)
        canvas.removeEventListener("wheel", this.handleWheel)
    }

    private readonly handleWheel = (evt: WheelEvent) => {
        const zoom = evt.deltaY > 0 ? +1 : -1
        this.eventZoom.dispatch(zoom)
    }

    private readonly handlePointerDown = (evt: PointerEvent) => {
        const canvas = evt.target as null | HTMLElement
        if (!canvas) return

        canvas.setPointerCapture(evt.pointerId)
        const pointer = makePointerState(evt)
        const history: PointerHistory = {
            first: pointer,
            previous: pointer,
        }
        this.pointers.set(pointer.id, history)
        this.eventDown.dispatch(pointer)
    }

    private readonly handlePointerMove = (evt: PointerEvent) => {
        const history = this.pointers.get(evt.pointerId)
        if (!history) return

        const current = makePointerState(evt)
        this.eventDrag.dispatch({
            ...history,
            current,
        })
        history.previous = current
    }

    private readonly handlePointerUp = (evt: PointerEvent) => {
        const history = this.pointers.get(evt.pointerId)
        if (!history) return

        const canvas = evt.target as null | HTMLElement
        if (!canvas) return

        canvas.releasePointerCapture(evt.pointerId)
        this.pointers.delete(evt.pointerId)
        const current = makePointerState(evt)
        this.eventUp.dispatch({
            ...history,
            current,
        })
    }
}

function makePointerState(evt: PointerEvent): PointerState {
    const rect = (evt.target as HTMLElement).getBoundingClientRect()
    const realX = evt.clientX - rect.left
    const realY = evt.clientY - rect.top
    const x = (realX / rect.width - 0.5) * 2
    const y = (0.5 - realY / rect.height) * 2
    return {
        realX,
        realY,
        x,
        y,
        id: evt.pointerId,
        button: evt.button,
        timestamp: evt.timeStamp,
    }
}
