function fib(n)
{
  let a = 0, b = 1
  while(n--)
    [a, b] = [b, a + b]
  return a
}

for(var i = 0; i <= 10; i++)
  console.log("Fib(" + i + ") =", fib(i))
