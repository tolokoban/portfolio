import { describe } from "node:test"
import { snapValue, value2percent } from "./tools"

describe("routes/work/game/ColorGuess/ColorAttributeSelector/tools.ts", () => {
    // @TODO: Implement tests.
    describe("ColorAttributeSelector/tools", () => {
        const cases1: Array<
            [maxValue: number, steps: number, minStep: number, maxStep: number]
        > = [[360, 19, 0, 18]]
        for (const [maxValue, steps, minStep, maxStep] of cases1) {
            describe(`value2percent(..., ${[
                maxValue,
                steps,
                minStep,
                maxStep,
            ]})`, () => {
                const cases2: Array<[value: number, expected: number]> = [
                    [0, 0],
                    [9, 0],
                    [11, 20 / 340],
                    [20, 20 / 340],
                    [40, 40 / 340],
                    [320, 320 / 340],
                    [340, 1],
                ]
                for (const [value, expected] of cases2) {
                    it(`value2percent(${value}, ...) should be equal to ${expected}`, () => {
                        expect(
                            value2percent(
                                value,
                                maxValue,
                                steps,
                                minStep,
                                maxStep
                            )
                        ).toBeCloseTo(expected)
                    })
                }
            })
            describe(`snapValue(..., ${[
                maxValue,
                steps,
                minStep,
                maxStep,
            ]})`, () => {
                const cases2: Array<[value: number, expected: number]> = [
                    [0, 0],
                    [20, 19],
                    [340, 340],
                    [360, 340],
                ]
                for (const [value, expected] of cases2) {
                    it(`snapValue(${value}, ...) should be equal to ${expected}`, () => {
                        expect(
                            snapValue(value, maxValue, steps, minStep, maxStep)
                        ).toBe(expected)
                    })
                }
            })
        }
    })
})
