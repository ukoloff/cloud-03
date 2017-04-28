const sum = require('.')

module.exports = (from, to)=>
  sum(x => x, from, x => x + 1, to)
