function sqrt(x)
{
  var approx = 1
  while(abs(approx * approx - x) > 1e-3)
    approx = (approx + x / approx) / 2
  return approx

  function abs(x)
  {
    return x > 0 ? x : -x
  }
}

console.log("sqrt(5) = ", sqrt(5))
