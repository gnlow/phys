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
    at(x: number) {
        return this.coeffs.reduce(
            (sum, c, i) =>
                sum + c * x**i,
            0,
        )
    }
}
