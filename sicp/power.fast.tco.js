power = (b, n)=>
{
  return iter(n, b, 1)

  function iter(n, b, a)
  {
    if(!n)
      return a
    return even(n) ? iter(n / 2, square(b), a) : iter(n - 1, b, a * b)
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
