power = (b, n)=>
{
  let a = 1
  while(n)
  {
    if(even(n))
    {
      n /= 2
      b *= b
    }
    else
    {
      n--
      a *= b
    }
  }
  return a

  function even(n)
  {
    return !(n & 1)
  }
}

console.log('5 ** 3 =', power(5, 3))
