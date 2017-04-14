sum = (term, from, next, to)=>
  from > to ? 0 : term(from) + sum(term, next(from), next, to)

sumInts = (from, to)=>
  sum(identity, from, inc, to)

identity = x => x

inc = x => 1 + x

sumCubes = (from, to)=>
  sum(cube, from, inc, to)

cube = x => x * x * x

sumPi = (from, to)=>
  sum(piTerm, from, add4, to)

piTerm = (n)=> 1 / n / (n + 2)

add4 = (n)=> n + 4

console.log("Sum 1..5 =", sumInts(1, 5))
console.log("Sum of cubes 1..5 =", sumCubes(1, 5))
console.log("Pi 1..5 =", 8 * sumPi(1, 100))
