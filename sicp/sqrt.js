
sqrt = (x) =>
{
  square = x => x * x

  is_good = (approx, x) => abs(square(approx) - x) < 1e-3

  abs = (x) => x > 0 ? x : -x

  improve = (approx, x) => avg(approx, x / approx)

  avg = (a, b) => (a + b) / 2

  iter = (approx, x) => is_good(approx, x) ? approx : iter(improve(approx, x), x)

  return iter(1, x)
}

console.log("sqrt(5) = ", sqrt(5))
