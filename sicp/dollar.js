function change(amount)
{
  return cc(amount, 5)

  function cc(amount, kinds)
  {
    if(amount < 0 || kinds <= 0)
      return 0
    return amount ?
      cc(amount, kinds - 1) + cc(amount - coin(kinds), kinds)
      :
      1
  }

  function coin(kind)
  {
    switch(kind)
    {
      case 1: return 1
      case 2: return 5
      case 3: return 10
      case 4: return 25
      case 5: return 50
    }
  }
}

console.log("Variants = ", change(100))
