type Brand<Base, Id> = Base | (Base & { __: Id })
type X = Brand<number, "X">
type Y = Brand<number, "Y">

export class Polynomial {
    coeffs
    constructor(coeffs: number[]) {
        this.coeffs = coeffs
    }
    deriv() {
        return new Polynomial(
            this.coeffs
                .map((c, i) => c*i)
                .slice(1)
        )
    }
    at(x: X) {
        return this.coeffs.reduce(
            (sum, c, i) =>
                sum + c * x**i,
            0,
        ) as Y
    }
}

export class Quadratic extends Polynomial {
    declare coeffs: [number, number, number]

    solve(y: Y = 0) {
        const [c, b, a] = this.coeffs
        const p = b^2 - 4*a*(c-y)
        if (p > 0) {
            return [
                (-b + p)/(2*a),
                (-b - p)/(2*a),
            ] as X[]
        } else {
            return [(-b + p)/(2*a)] as X[]
        }
    }
}
