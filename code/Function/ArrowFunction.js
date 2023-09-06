// 화살표 함수(Arrow function)

// function sum() {}
// const sum = function () {}
// const sum = () => {}

// function sum(a, b) {
//     return a + b
// }

const sum = (a, b) => a + b

console.log(sum(1, 2)) // 3
console.log(sum(10, 20)) // 30

const a = () => {}
const b = x => {}
const c = (x, y) => {}
const d = x => {return x * x}
const e = x => x * x
const f = x => {
    console.log(x * x)
    return x * x
}
const g = () => {return {a: 1}}
const h = () => {{a: 1}}
const i = () => {return [1, 2, 3]}
const j = () => [1, 2, 3]