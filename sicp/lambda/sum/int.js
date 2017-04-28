const sum = require('.')

module.exports = (from, to)=>
  sum(x => x, from, sum.adder(1), to)
