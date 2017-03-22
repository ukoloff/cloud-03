# https://medium.com/@roman01la/understanding-transducers-in-javascript-3500d3bd9624

src = [1..10]

inc = (x)->
  x + 1

even = (x)->
  !(x & 1)

append = (accumulator, input)->
  accumulator.push input
  accumulator

compose = (fns...)->
  fns.reduceRight (accumulator, input)->
    input accumulator

mapping = (f)-> (reducer)-> (accumulator, input)->
  reducer accumulator, f input

filtering = (f)-> (reducer)-> (accumulator, input)->
  if f input
    reducer accumulator, input
  else
    accumulator

dst = src.reduce compose(mapping(inc), filtering(even), append), []

console.log dst
