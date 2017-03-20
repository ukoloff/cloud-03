function fact(n)
{
  for(var product = 1; n > 1; n--)
    product *= n
  return product
}

console.log("5! = ", fact(5))
