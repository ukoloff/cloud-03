
function sqrt(x)
{
  return iter(1, x)

  function square(x)
  {
    return x * x
  }

  function is_good(approx)
  {
    return abs(square(approx) - x) < 1e-3
  }

  function abs(x)
  {
    return x > 0 ? x : -x
  }

  function improve(approx)
  {
    return avg(approx, x / approx)
  }

  function avg(a, b)
  {
    return (a + b) / 2
  }

  function iter(approx)
  {
    return is_good(approx, x) ? approx : iter(improve(approx, x), x)
  }
}

console.log("sqrt(5) = ", sqrt(5))
