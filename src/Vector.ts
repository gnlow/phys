import { degToRad } from "../util/mod.ts"

export class Vector<N> {
    values
    constructor(values: number[] & { length: N }) {
        this.values = values
    }
    at(i: number) {
        return this.values[i]
    }
    add(v: Vector<N>) {
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
    
    get x() { return this.values[0] }
    set x(x: number) { this.values[0] = x }

    get r() { return this.values[0] }
    set r(r: number) { this.values[0] = r }

    get y() { return this.values[1] }
    set y(y: number) { this.values[1] = y }

    get g() { return this.values[1] }
    set g(g: number) { this.values[1] = g }

    get z() { return this.values[2] }
    set z(z: number) { this.values[2] = z }

    get b() { return this.values[2] }
    set b(b: number) { this.values[2] = b }

    get w() { return this.values[3] }
    set w(w: number) { this.values[3] = w }

    get a() { return this.values[3] }
    set a(a: number) { this.values[3] = a }
}

export type Vec<N> = Vector<N>

export const vec =
<N>
(...values: number[] & { length: N }) =>
    new Vector<N>(values)

export const theta = Vector.fromDeg