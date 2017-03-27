power = (b, n)=>
{
  iter = (n, product)=>
    n ? iter(n - 1, product * b) : product
  return iter(n, 1)
}

console.log('5 ** 3 =', power(5, 3))
