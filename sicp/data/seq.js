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
{
  const n = (q, result)=>
    isEmpty(q) ? result : n(cdr(q), result + 1)
  return n(q, 0)
}

const append = seq.append = (a, b)=>
  isEmpty(a) ? b : seq(car(a), append(cdr(a), b))

const last = seq.last = (q)=>
{
  const tail = cdr(q)
  return tail ? last(tail) : car(q)
}

seq.reverse = (q)=>
{
  const r = (q, result)=>
    isEmpty(q) ? result : r(cdr(q), seq(car(q), result))
  return r(q)
}
