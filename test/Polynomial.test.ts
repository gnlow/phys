import { assertEquals } from "jsr:@std/assert"
import { Polynomial } from "../src/Polynomial.ts"

Deno.test(".at", () => {
    const poly = new Polynomial([2, 0, 3])
    assertEquals(poly.at(2), 14)
})

Deno.test(".deriv", () => {
    const poly = new Polynomial([2, 0, 3]).deriv()
    assertEquals(poly.at(2), 12)
})
