const sum = (term, from, next, to)=>
{
  const iter = (x, result)=>
    x > to ? result : iter(next(x), result + term(x))
  return iter(from, 0)
}

sum.adder = a => b => a + b

module.exports = sum
