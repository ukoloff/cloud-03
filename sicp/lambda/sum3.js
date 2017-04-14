sumInts = (from, to)=>
  from > to ? 0 : from + sumInts(from + 1, to)

sumCubes = (from, to)=>
  from > to ? 0 : cube(from) + sumCubes(from + 1, to)

cube = x =>
  x * x * x

sumPi = (from, to)=>
  from > to ? 0 : 1 / from / (from + 2) + sumPi(from + 4, to)

console.log("Sum 1..5 =", sumInts(1, 5))
console.log("Sum of cubes 1..5 =", sumCubes(1, 5))
console.log("Pi 1..5 =", 8 * sumPi(1, 100))
