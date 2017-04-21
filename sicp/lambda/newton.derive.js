function newton(f, start)
{
  const df = derive(f)
  return iter(start)

  function iter(x)
  {
    return isGood(x) ? x : iter(improve(x))
  }

  function improve(x)
  {
    return x - f(x) / df(x)
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

function derive(f)
{
  const dx = 1e-3
  return x => (f(x + dx) - f(x)) / dx
}

console.log("sqrt(2) =", newton(x => x * x - 2, 1))
