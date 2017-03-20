fact = n =>
  n < 2 ? 1 : n * fact(n - 1)

console.log("5! = ", fact(5))
