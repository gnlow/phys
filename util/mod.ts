// deno-lint-ignore-file no-namespace

export const degToRad =
(deg: number) =>
    deg * Math.PI / 180

export const radToDeg =
(rad: number) =>
    rad / Math.PI * 180

export namespace Deg {
    export const lift =
    (f: (rad: number) => number) =>
    (deg: number) =>
        radToDeg(f(degToRad(deg)))
}
