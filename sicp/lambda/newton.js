function newton(f, start)
{
  return iter(start)

  function iter(x)
  {
    return isGood(x) ? x : iter(improve(x))
  }

  function improve(x)
  {
    return x - f(x) / df(x)
  }

  function df(x)
  {
    const dx = 1e-3
    return (f(x + dx) - f(x)) / dx
  }

  function isGood(x)
  {
    return abs(f(x)) < 1e-5
  }

  function abs(x)
  {
    return x > 0 ? x : -x
  }
}

console.log("sqrt(2) =", newton(x => x * x - 2, 1))
