import { assertEquals } from "jsr:@std/assert"
import { Deg } from "../util/mod.ts"

Deno.test("Deg.lift", () => {
    assertEquals(Deg.lift(Math.sin)(90), 1)
})