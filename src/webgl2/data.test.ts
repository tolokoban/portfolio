import { makeData } from "./data"

describe("data.ts", () => {
    it(`should work with super simple example`, () => {
        const data = makeData(1, { x: 1 })
        data.poke("x", [27])
        const got = new Float32Array(data.get())
        const exp = new Float32Array([27])
        expect(got).toEqual(exp)
    })
    it(`should interleave floats`, () => {
        const data = makeData(3, {
            pos: 2,
            col: 3,
        })
        data.poke("pos", [10, 11, 20, 21, 30, 31])
        data.poke("col", [0.11, 0.12, 0.13, 0.21, 0.22, 0.23, 0.31, 0.32, 0.33])
        const got = new Float32Array(data.get())
        // prettier-ignore
        const exp = new Float32Array([
            10, 11, 0.11, 0.12, 0.13,
            20, 21, 0.21, 0.22, 0.23,
            30, 31, 0.31, 0.32, 0.33,
        ])
        expect(got).toEqual(exp)
    })
})
