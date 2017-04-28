const cons = require('../cons')

const z = cons(1, 2)
console.log("1 =", cons.car(z))
console.log("2 =", cons.cdr(z))
