const rat = require('../rational')

console.log("1/2 =", rat.s(rat.oneHalf))
console.log("1/3 =", rat.s(rat.oneThird))
console.log("5/6 =", rat.s(rat.add(rat.oneHalf, rat.oneThird)))
