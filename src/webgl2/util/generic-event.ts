export interface GenericEventInterface<T> {
    addListener(listener: (arg: T) => void): void
    removeListener(listener: (arg: T) => void): void
}

export default class GenericEvent<T> implements GenericEventInterface<T> {
    private listeners: Array<(arg: T) => void> = []

    addListener(listener: (arg: T) => void) {
        const { listeners } = this
        if (listeners.includes(listener)) return

        listeners.push(listener)
    }

    removeListener(listener: (arg: T) => void) {
        this.listeners = this.listeners.filter((item) => item !== listener)
    }

    dispatch(arg: T) {
        // eslint-disable-next-line no-restricted-syntax
        for (const listener of this.listeners) {
            try {
                listener(arg)
            } catch (ex) {
                console.error("Error in an event listener!")
                console.error("  error:   ", ex)
                console.error("  listener:", listener)
            }
        }
    }
}
