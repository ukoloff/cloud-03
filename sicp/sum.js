sum = (a, b)=>
{

  inc = x => x + 1
  dec = x => x - 1

  return a ? inc(sum(dec(a), b)) : b
}

console.log('3 + 5 =', sum(3, 5))
