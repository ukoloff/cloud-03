const sum = require('.')

module.exports = (f, from, to, n)=>
{
  const step = (to - from) / n
  return step * sum(f, from +  step / 2, sum.adder(step), to)
}
