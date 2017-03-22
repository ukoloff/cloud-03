###
https://medium.com/@roman01la/understanding-transducers-in-javascript-3500d3bd9624

See also:
  https://habrahabr.ru/post/237613/
  https://habrahabr.ru/post/237733/
###
src = [0..10]

square = (x)->
  x * x

inc = (x)->
  x + 1

even = (x)->
  !(x & 1)

lt10 = (x)->
  x < 10

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

xform = compose filtering(even), filtering(lt10), mapping(square), mapping(inc), append

dst = src.reduce xform, []

console.log dst
