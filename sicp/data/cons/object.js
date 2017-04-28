module.exports = exports = (car, cdr)=>
{
  return {car: car, cdr: cdr}
}

exports.car = (cons)=>
  cons.car

exports.cdr = (cons)=>
  cons.cdr
