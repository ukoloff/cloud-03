fib = n =>
  n < 2 ? n : fib(n - 1) + fib(n - 2)

for(var i = 0; i <= 10; i++)
  console.log("Fib(" + i + ") =", fib(i))
