
sqrt = (x) =>
{
  let square = x => x * x

  const is_good = (approx, x) => abs(square(approx) - x) < 1e-3

  var abs = (x) => x > 0 ? x : -x

  let improve = (approx, x) => avg(approx, x / approx)

  let avg = (a, b) => (a + b) / 2

  let iter = (approx, x) => is_good(approx, x) ? approx : iter(improve(approx, x), x)

  return iter(1, x)
}

console.log("sqrt(5) = ", sqrt(5))
