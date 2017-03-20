
function cbrt(x)
{
  return iter(1, x)

  function square(x)
  {
    return x * x
  }

  function cube(x)
  {
    return x * x * x
  }


  function is_good(approx)
  {
    return abs(cube(approx) - x) < 1e-3
  }

  function abs(x)
  {
    return x > 0 ? x : -x
  }

  function improve(approx)
  {
    return (2 * approx + x / square(approx)) / 3
  }

  function iter(approx)
  {
    return is_good(approx, x) ? approx : iter(improve(approx, x), x)
  }
}

console.log("cubic root(5) = ", cbrt(5))
