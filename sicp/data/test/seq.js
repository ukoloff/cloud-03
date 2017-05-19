const seq = require('../seq')

let s0
const s1 = seq(1)
const s2 = seq(1, seq(2))
const s3 = seq(1, seq(2, seq(3)))
console.log("[] =", seq.toString(s0))
console.log("[1] =", seq.toString(s1))
console.log("[1, 2] =", seq.toString(s2))
console.log("[1, 2, 3] =", seq.toString(s3))
