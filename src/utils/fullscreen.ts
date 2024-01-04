export async function requestFullscreen(
    element: Element | null,
    options: FullscreenOptions = {
        navigationUI: "hide",
    }
): Promise<boolean> {
    if (!element) return false

    try {
        await element.requestFullscreen(options)
        return true
    } catch (ex) {
        return false
    }
}

export async function exitFullscreen(): Promise<boolean> {
    if (!document.fullscreenElement) return false

    try {
        await document.exitFullscreen()
        return true
    } catch (ex) {
        return false
    }
}
