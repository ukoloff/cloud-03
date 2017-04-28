const sum = require('.')

module.exports = (from, to)=>
  sum(n => 1 / n / (n + 2), from,  sum.adder(4), to)
