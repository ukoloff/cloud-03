sum = (a, b)=>
{

  inc = x => x + 1
  dec = x => x - 1

  return a ? sum(dec(a), inc(b)) : b
}

console.log('3 + 5 =', sum(3, 5))
