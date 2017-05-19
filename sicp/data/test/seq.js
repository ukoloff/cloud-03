const seq = require('../seq')

let s0
const s1 = seq(1)
const s2 = seq(1, seq(2))
const s3 = seq(1, seq(2, seq(3)))
console.log("[] =", seq.toString(s0))
console.log("[1] =", seq.toString(s1))
console.log("[1, 2] =", seq.toString(s2))
console.log("[1, 2, 3] =", seq.toString(s3))

console.log("1 =", seq.car(s3))
console.log("2 =", seq.cadr(s3))

console.log("1 =", seq.nth(s3, 0))
console.log("2 =", seq.nth(s3, 1))
console.log("3 =", seq.nth(s3, 2))

console.log("0 =", seq.count(s0))
console.log("1 =", seq.count(s1))
console.log("2 =", seq.count(s2))
console.log("3 =", seq.count(s3))

console.log("[1, 2, 3, 1, 2] =", seq.toString(seq.append(s3, s2)))
console.log("[1, 2, 1, 2, 3] =", seq.toString(seq.append(s2, s3)))
console.log("[1, 2] =", seq.toString(seq.append(s2, s0)))
console.log("[1, 2] =", seq.toString(seq.append(s0, s2)))
