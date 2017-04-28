const sumInts = require('../sum/int')
const sumCubes = require('../sum/cubes')
const sumPi = require('../sum/pi')
const integral = require('../sum/integral')

console.log("Sum 1..5 =", sumInts(1, 5))
console.log("Sum of cubes 1..5 =", sumCubes(1, 5))
console.log("Pi 1..5 =", 8 * sumPi(1, 100))
console.log("2 =", integral(Math.sin, 0, Math.PI, 10))
