// Sequence, list, tuple...

let cons = require('./cons')

let seq = module.exports = (a, b)=>
  cons(a, b)

seq.toString = (q)=>
{
  const list = (q, prefix)=>
    q == null ? prefix : list(cons.cdr(q), prefix + (prefix ? ', ' : '') + cons.car(q))
  return `[${list(q, '')}]`
}
