const cons = require('./cons')

const rational = module.exports = exports = cons

const nom = exports.nom = cons.car
const denom = exports.denom = cons.cdr

exports.oneHalf = rational(1, 2)
exports.oneThird = rational(1, 3)

const s = exports.s = (r)=>
  `${nom(r)}/${denom(r)}`

exports.print = (r)=>
  console.log(s(r))

exports.add = (a, b)=>
  rational(nom(a) * denom(b) + denom(a) * nom(b), denom(a) * denom(b))

