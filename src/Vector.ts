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

export class Vec1 extends Vector {
    get x() { return this.values[0] }
    set x(x: number) { this.values[0] = x }

    get r() { return this.values[0] }
    set r(r: number) { this.values[0] = r }
}

export class Vec2 extends Vec1 {
    get y() { return this.values[1] }
    set y(y: number) { this.values[1] = y }

    get g() { return this.values[1] }
    set g(g: number) { this.values[1] = g }
}

export class Vec3 extends Vec2 {
    get z() { return this.values[2] }
    set z(z: number) { this.values[2] = z }

    get b() { return this.values[2] }
    set b(b: number) { this.values[2] = b }
}

export class Vec4 extends Vec3 {
    get w() { return this.values[3] }
    set w(w: number) { this.values[3] = w }

    get a() { return this.values[3] }
    set a(a: number) { this.values[3] = a }
}

export const vec1 = (x: number) => new Vec1([x])
export const vec2 = (x: number, y: number) => new Vec2([x, y])
export const vec3 =
    (x: number, y: number, z: number) =>
        new Vec3([x, y, z])
export const vec4 =
(x: number, y: number, z: number, w: number) =>
    new Vec4([x, y, z, w])

export const v =
(...values: number[]) =>
    new Vector(values)

export const theta = Vector.fromDeg