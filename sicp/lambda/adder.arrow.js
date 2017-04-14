function sum(term, from, next, to)
{
  let iter = (x, result)=>
    x > to ? result : iter(next(x), result + term(x))
  return iter(from, 0)
}

sumInts = (from, to)=>
  sum(identity, from, inc, to)

identity = x => x

adder = a => b => a + b

inc = adder(1)

sumCubes = (from, to)=>
  sum(cube, from, inc, to)

cube = x => x * x * x

sumPi = (from, to)=>
  sum(function(n){return 1 / n / (n + 2)}, from,  adder(4), to)

console.log("Sum 1..5 =", sumInts(1, 5))
console.log("Sum of cubes 1..5 =", sumCubes(1, 5))
console.log("Pi 1..5 =", 8 * sumPi(1, 100))
