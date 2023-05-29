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

// 형 변환 (Type conversion)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN(Not a Number)

if ('false') {
  console.log(123)
}

const k = 1
const l = '1'

// ==(동등 연산자) : 되도록 사용하지 x / 결과 : true
// 일치 연산자(===) 사용
console.log(k == l) 

// 함수 복습
// m,n  = 매개변수
// 1, 3, 4, 12 = 인수
function sum(m, n) {
  // console.log(m + n)
  return m + n
  // console.log(arguments)
  // return arguments[0] + arguments[1]
}

const o = sum(1, 3)
console.log(sum(1, 3)) // 반복 X
console.log(o) // 반복 사용 시

// 화살표 함수
// () => {} vs function () {}

const double = function (p) {
  return p * 2
}
console.log('double: ', double(7))

const doubleArrow = (p) => p * 2 // 매개변수 1개면 () 생략 가능
// => ({name: 'June'}) / {} 객체데이터 사용할 때는 ()로 한번 감싸서 사용
console.log('doubleArrow', doubleArrow(7))

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

// const a = 7
// function double() {
//   console.log(a * 2)
// }
// double();

// // () 두번 사용 = 즉시실행함수 / 위 함수에 ; 붙여줘야한다.
// (function () {
//   console.log(a * 2)
// })();

// // 권장!
// (function () {
//   console.log(a * 2)
// }());

//-------------------------

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7

// double()

// // 실행 x
// const double = fucntion () {
//   console.log(a * 2)
// }

// // 실행 o - (호이스팅)
// function double() {
//   console.log(a * 2)
// }

//-------------------------

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout 함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// 1000ms = 1초

// setTimeout(function() {
//   console.log('JUNE!')
// }, 3000)

const timer = setInterval(() => {
  console.log('JUNE!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
})

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(callback) {
  setTimeout(() => {
    console.log('JUNE!')
    callback() // 실행 위치를 보장!
  }, 3000)
}
// callback
// timeout 함수를 하나의 인수로 사용 -> callback이라는 매개변수로 들어간다 -> 위 함수에서 실행 위치 보장
timeout(() => {
  console.log('Done!')
})

//-------------------------

// 생성자 함수(prototype)

// const june = {
//   firstName: 'June',
//   lastName: 'Lee',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(june.getFullName())

// Class
// new를 사용하는 생성자 함수는 파스칼 표기법 사용
function User(first, last) {
  this.firstName = first
  this.lastName = last
  // this.getFullName = function () {
  //   return `${this.firstName} ${this.lastName}`
  // }
}
// prototype 속성으로 효율적인 메모리 관리
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// june, amy, neo = instance
const june = new User('June', 'Lee')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(june.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())

//-------------------------

// // this
// // 일반(Normal) 함수는 호출 위치에서 따라 this 정의!
// // 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

//----------예제 1-----------

// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const june = new User('June')

// june.normal() // June 출력
// june.arrow() // Undefined 출력

//----------예제 2-----------

// // undefined
// const timer = {
//   name: 'June!!',
//   timeout: function () {
//     setTimeout(function () {
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout()

// // June!!
// // setTimout & setInterval timer 함수 사용시 화살표 함수 사용!!
// const timer = {
//   name: 'June!!',
//   timeout: function () {
//     setTimeout(() => {
//       console.log(this.name) // this = timer
//     }, 2000)
//   }
// }
// timer.timeout()

//-------------------------

// 참고
const kevin = {
  name: 'Kevin',
  normal: function () { // : function 생략해도 동작
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}

kevin.normal() // Kevin
kevin.arrow() // undifined

// ES6 Classes

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }
// const june = new User('June', 'Lee')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(june)
// console.log(amy.getFullName())
// console.log(neo.getFullName())

//-----------Class 사용하면 동일-------------

// class User {
//   constructor(first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// const june = new User('June', 'Lee')
// const amy = new User('Amy', 'Clarke')
// const neo = new User('Neo', 'Smith')

// console.log(june)
// console.log(amy.getFullName())
// console.log(neo.getFullName())