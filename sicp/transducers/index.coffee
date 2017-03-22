# https://medium.com/@roman01la/understanding-transducers-in-javascript-3500d3bd9624

src = [1..10]

inc = (x)->
  x + 1

even = (x)->
  !(x & 1)

mapping = (f)-> (accumulator, input)->
  accumulator.push f input
  accumulator

filtering = (f)-> (accumulator, input)->
  if f input
    accumulator.push input
  accumulator

dst = src.reduce mapping(inc), []
  .reduce filtering(even), []

console.log dst
