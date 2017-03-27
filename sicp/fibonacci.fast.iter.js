function fib(n)
{
  let a = 0, b = 1, p = 0, q = 1
  while(n)
  {
    if(even(n))
    {
      [p, q] = [p * p + q * q, q * (2 * p + q)]
      n /= 2
    }
    else
    {
      [a, b] = [a * p + b * q, a * q + b * p + b * q]
      n--
    }
  }
  return a

  function even(n)
  {
    return !(n & 1)
  }
}

for(var i = 0; i <= 10; i++)
  console.log("Fib(" + i + ") =", fib(i))
