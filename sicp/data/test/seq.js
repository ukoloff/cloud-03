const seq = require('../seq')

let s0
const s1 = seq(7)
const s2 = seq(27, seq(42))
const s3 = seq(108, seq(109, seq(112)))
console.log("[] =", seq.toString(s0))
console.log("[7] =", s1)
console.log("[27, 42] =", s2)
console.log("[108, 109, 112] =", s3)

console.log("108 =", seq.car(s3))
console.log("109 =", seq.cadr(s3))

console.log("108 =", seq.nth(s3, 0))
console.log("109 =", seq.nth(s3, 1))
console.log("112 =", seq.nth(s3, 2))

console.log("0 =", seq.count(s0))
console.log("1 =", seq.count(s1))
console.log("2 =", seq.count(s2))
console.log("3 =", seq.count(s3))

console.log("[108, 109, 112, 27, 42] =", seq.append(s3, s2))
console.log("[27, 42, 108, 109, 112] =", seq.append(s2, s3))
console.log("[27, 42] =", seq.append(s2, s0))
console.log("[27, 42] =", seq.append(s0, s2))

console.log('7 =', seq.last(s1))
console.log('42 =', seq.last(s2))
console.log('112 =', seq.last(s3))

