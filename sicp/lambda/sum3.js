sumInts = (from, to)=>
  from > to ? 0 : from + sumInts(from + 1, to)


console.log("Sum 1..5 =", sumInts(1, 5))
