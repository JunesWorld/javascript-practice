import getType from './getType'

console.log(typeof 'Hello world!')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof []) // object

// getType.js
console.log(getType(123)) // [Number] [] 없애기 위해 slice
console.log(getType(null)) // Null
console.log(getType({})) // Object
console.log(getType([])) // Array

// 산술 연산자(arithmetic operator)
console.log(7 % 5) // 나머지

// 할당 연산자(assignment operator)
let a = 2
// a = a + 1
a += 1 // * / 도 가능
console.log(a)

// 비교 연산자(comparison operator)

const b = 1
const c = 1

console.log(b === c)
console.log(b !== c)
console.log(b <= c)
console.log(b >= c)


function isEqual(x, y) {
  return x === y
}

console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))

// 논리 연산자(logical operator)

const d = 1 === 1
const e = 'AB' === 'AB'
const f = true

console.log(d)
console.log(e)
console.log(f)

console.log('&&: ', d && e && f) // and
console.log('||: ', d || e) // or : 하나만 true여도 true
console.log('!: ', !a) // not 연산자