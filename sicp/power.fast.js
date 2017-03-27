power = (b, n)=>
{
  return iter(n, 1)

  function iter(n)
  {
    if(!n)
      return 1
    return even(n) ? square(iter(n / 2)) : b * iter(n - 1)
  }

  function even(n)
  {
    return !(n & 1)
  }

  function square(x)
  {
    return x * x
  }
}

console.log('5 ** 3 =', power(5, 3))
