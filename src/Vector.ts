import { degToRad } from "../util/mod.ts"

export class Vector {
    values
    constructor(values: number[]) {
        this.values = values
    }
    at(i: number) {
        return this.values[i]
    }
    add(v: Vector) {
        return new Vector(
            this.values.map((_, i) =>
                this.at(i) + v.at(i)
            )
        )
    }
    mul(n: number) {
        return new Vector(
            this.values.map((_, i) =>
                this.at(i) * n
            )
        )
    }
    get size() {
        return Math.hypot(...this.values)
    }

    static fromDeg(deg: number) {
        return new Vector([
            Math.cos(degToRad(deg)),
            Math.sin(degToRad(deg)),
        ])
    }
}

export const v =
(...values: number[]) =>
    new Vector(values)

export const theta = Vector.fromDeg