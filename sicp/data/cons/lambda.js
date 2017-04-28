module.exports = exports = (car, cdr)=>
  fn =>
    fn(car, cdr)

exports.car = (cons)=>
  cons((a, b)=> a)

exports.cdr = (cons)=>
  cons((a, b)=> b)
