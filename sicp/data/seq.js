// Sequence, list, tuple...

let cons = require('./cons')

let seq = module.exports = (a, b)=>
  cons(a, b)

const isEmpty = seq.isEmpty = (q)=>
  q == null

seq.toString = (q)=>
{
  const list = (q, prefix)=>
    isEmpty(q) ? prefix : list(cons.cdr(q), prefix + (prefix ? ', ' : '') + cons.car(q))
  return `[${list(q, '')}]`
}

// [0]
const car = seq.car = cons.car
const cdr = seq.cdr = cons.cdr

// [1]
seq.cadr = (q)=>
  car(cdr(q))

const nth = seq.nth = (q, n)=>
  isEmpty(q) ? null : n ? nth(cdr(q), n - 1) : car(q)

const count = seq.count = (q)=>
  isEmpty(q) ? 0 : 1 + count(cdr(q))
