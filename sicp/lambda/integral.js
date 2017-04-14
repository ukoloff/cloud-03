function sum(term, from, next, to)
{
  let iter = (x, result)=>
    x > to ? result : iter(next(x), result + term(x))
  return iter(from, 0)
}

function integral(f, from, to, n)
{
  let step = (to - from) / n
  return step * sum(f, from +  step / 2, adder(step), to)
}

adder = a => b => a + b

console.log("2 =", integral(Math.sin, 0, Math.PI, 10))
