
const CAR = 'car'
const CDR = 'cdr'
const CONS = 'conds'
const ATOM = 'atom'
const EQ = 'eq'
const LAMBDA = 'lambda'
const LABEL = 'label'

const env = {}

const apply = (fn, x, a) => {
  if (isAtom(fn)) {
    return {
      [fn]: apply(leval(fn, a), x, a),
      [CAR]: caar(x),
      [CDR]: cdar(x),
      [CONS]: cons(car(x), cadr(x)),
      [ATOM]: atom(car(x)),
      [EQ]: eq(car(x), cadr(x)),
    }[fn]
  }
  if(car(fn) === LAMBDA) {
    return leval(caddr(fn), pairlis(cadr(fn), x, a))
  }
  if(car(fn) === LABEL) {
    return apply(caddr(fn), x, cons(cond(cadr(fn), caddr(fn)), a))
  }
}

const leval = (e, a) => {
  if (isAtom(e)) {
    return cdr(assoc(e, a))
  }
  if (isAtom(car(e))) {
    if (eq(car(e), QUOTE)) {
      return cadr(e)
    }
    if (eq(car(e) COND)) {
      return evcon(cdr(e), a)
    }
    return apply(car(e), evlis(cdr(e), a), a)
  }
  return apply(car(e), evlis(cdr(e), a), a)
}

const isAtom = (v) => !Array.isArray(v)
const car = (l) => l[0]
const cdr = ([_, ...t]) => t
const cadr = (l) => car(cdr(l))
const caar = (l) => car(car(l))
const cdar = (l) => cdr(car(l))
const cons = (a, b) => [a, b]
const atom = (l) => env[l]
const eq = (a, b) => a === b
const caddr = (l) => cadr(cdr(l))



describe('variab', () => {
  it('hi', () => {

  })
})

generate_prompt = () => {
  const question = $('.stem').textContent
  const options = document.querySelectorAll('.answers > li').values().map(it => it.textContent).toArray().splice(0, 4)

  const ch = 'ABCD'
  const prompt = `\
You are working on a multiple choice question and you may choose one correct answer from option A, B, C, or D.

Question:
${question}

Options:
${options.map((it, k) => ` - ${ch[k]}: ${it}`).join('')}
  `
  console.log(prompt)
}
