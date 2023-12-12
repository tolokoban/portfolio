interface MoveEaseInOutOptions {
    duration: number
    min: number
    max: number
}

export function makeMoveEaseInOut({
    duration = 300,
    min = 0,
    max = 1,
}: Partial<MoveEaseInOutOptions>) {
    const scaleTime = 1 / duration
    const height = max - min
    return (t: number) => {
        const x = t * scaleTime
        return (
            min +
            height *
                (x < 0.5
                    ? 16 * x * x * x * x * x
                    : 1 - Math.pow(-2 * x + 2, 5) / 2)
        )
    }
}
