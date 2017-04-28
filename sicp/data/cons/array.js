module.exports = exports = (car, cdr)=>
  [car, cdr]

exports.car = (cons)=>
  cons[0]

exports.cdr = (cons)=>
  cons[1]
