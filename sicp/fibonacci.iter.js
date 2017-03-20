function fib(n)
{
  var a = 0, b = 1
  while(n--)
  {
    var a0 = a
    a = b
    b += a0
  }
  return a
}

for(var i = 0; i <= 10; i++)
  console.log("Fib(" + i + ") =", fib(i))
