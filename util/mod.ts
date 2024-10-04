// deno-lint-ignore-file no-namespace

export const degToRad =
(deg: number) =>
    deg * Math.PI / 180

export const radToDeg =
(rad: number) =>
    rad / Math.PI * 180

export const sin =
(deg: number) =>
    Math.sin(degToRad(deg))

export const cos =
(deg: number) =>
    Math.cos(degToRad(deg))

export const asin =
(n: number) =>
    radToDeg(Math.asin(n))

export const acos =
(n: number) =>
    radToDeg(Math.acos(n))

export namespace Deg {
    export const lift =
    (f: (rad: number) => number) =>
    (deg: number) =>
        radToDeg(f(degToRad(deg)))
}
