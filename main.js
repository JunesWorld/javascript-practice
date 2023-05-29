import getType from './getType'
import getRandom from './getRandom'

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

// 삼항 연산자(ternary operator)

const g = 1 < 2

if (g) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(g ? '참' : '거짓') // 참이면 : 앞부분 거짓이면 : 뒷부분

// 조건문(If Statement)

const h = getRandom()

switch (h) {
  case 0:
    console.log('h is 0')
    break
  case 2:
    console.log('h is 2')
    break
  default:
    console.log('rest...')
}

if (h === 0 ) {
  console.log('h is 0')
} else if (h ===2) {
  console.log('h is 2')
} else {
  console.log('rest...')
}

// 반복문 (For Statement)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 3; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) { // 짝수 클릭할 때만 출력
    li.addEventListener('click', function() {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

// 변수 유효범위(Variable Scope)
// var(사용x), let, const
// var = function level
// let, const = block level = {}
function scope() {
  if (true) {
    const j = 123
    console.log(j)
  }
}
scope()