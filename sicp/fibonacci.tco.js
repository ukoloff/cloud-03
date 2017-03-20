function fib(n)
{
  return iter(n, 0, 1)

  function iter(count, a, b)
  {
    return count ? iter(count - 1, b, a + b) : a
  }
}

for(var i = 0; i <= 10; i++)
  console.log("Fib(" + i + ") =", fib(i))
