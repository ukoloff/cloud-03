function fact(n)
{
  return iter(n, 1)

  function iter(n, product)
  {
    return n < 2 ? product : iter(n - 1, product * n)
  }
}

console.log("5! = ", fact(5))
