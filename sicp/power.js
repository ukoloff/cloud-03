power = (b, n)=>
{
  return n ? b * power(b, n - 1) : 1
}

console.log('5 ** 3 =', power(5, 3))
