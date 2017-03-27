function fib(n)
{
  return iter(n, 0, 1, 0, 1)

  function iter(n, a, b, p, q)
  {
    if(!n)
      return a
    return even(n) ?
      iter(n / 2, a, b, p * p + q * q, q * (2 * p + q))
      :
      iter(n - 1, a * p + b * q, a * q + b * p + b * q, p, q)
  }

  function even(n)
  {
    return !(n & 1)
  }
}

for(var i = 0; i <= 10; i++)
  console.log("Fib(" + i + ") =", fib(i))
