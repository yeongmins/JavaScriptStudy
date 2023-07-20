// 매개변수 패턴(Parameter pattern)
// 기본값(Default value)

// function sum(a, b = 1) {
//     return a + b
// }

// console.log(sum(1, 2))
// console.log(sum(7))

// 구조 분해 할당(Destructuring assigment)

const user = {
    name: 'HEROPY',
    age: 85,
    email: 'theseco@gmail.com'
}

function getName({ name }) {
    return name
}

function getEmail({ email = '이메일이 없습니다.'}) {
    return email
}

console.log(getName(user))
console.log(getEmail(user))

const fruits = ['Apple', 'Banana', 'Cherry']
const numbers = [1, 2, 3, 4, 5, 6, 7]

function getSecondItem([, b]) {
    return b
}

console.log(getSecondItem(fruits))
console.log(getSecondItem(numbers))

// 나머지 매개변수(Rest parameter)

function sum(...rest) {
    console.log(rest)
    return rest.reduce(function (acc, cur) {
        return acc + cur
    }, 0)
}

console.log(sum(1, 2)) // 3
console.log(sum(1, 2, 3, 4)) // 10
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 55