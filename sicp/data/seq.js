// Sequence, list, tuple...

let cons = require('./cons')

let seq = module.exports = (a, b)=>
  inspectable(cons(a, b))

const isEmpty = seq.isEmpty = (q)=>
  q == null

const toString = seq.toString = (q)=>
{
  const list = (q, prefix)=>
    isEmpty(q) ? prefix : list(cons.cdr(q), prefix + (prefix ? ', ' : '') + cons.car(q))
  return `[${list(q, '')}]`
}

function inspect()
{
  return toString(this)
}

function inspectable(fn)
{
  fn.toString = inspect
  return fn
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

const append = seq.append = (a, b)=>
  isEmpty(a) ? b : seq(car(a), append(cdr(a), b))

const last = seq.last = (q)=>
{
  const tail = cdr(q)
  return tail ? last(tail) : car(q)
}
