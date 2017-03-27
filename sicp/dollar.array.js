coins = [1, 5, 10, 25, 50]

function change(amount)
{
  return cc(amount, coins.length)

  function cc(amount, kinds)
  {
    if(amount < 0 || kinds <= 0)
      return 0
    return amount ?
      cc(amount, kinds - 1) + cc(amount - coins[kinds - 1], kinds)
      :
      1
  }
}

console.log("Variants = ", change(100))
