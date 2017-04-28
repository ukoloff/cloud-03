module.exports = exports = (car, cdr)=>
  n =>
    n ? cdr : car

exports.car = (cons)=>
  cons(0)

exports.cdr = (cons)=>
  cons(1)
