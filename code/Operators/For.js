// For 반복문

// for (초기화; 조건; 증감 OR 감소) {
    // 반복 실행할 코드 
// }

for (let i = 9; i > -1; i--) {
    if (i % 2 === 0) {
        continue
    }
    console.log(i)
}

// For of 반복문
const fruits = ['Apple', 'Banana', 'Cherry']

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

for (const fruit of fruits) {
    console.log(fruit)
}

// For of 반복문
const users = [
    {
        name: 'HEROPY',
        age: 85
    },
    {
        name: 'NEO',
        age: 25
    },
    {
        name: 'Lewis',
        age: 34
    }
]

for (let i = 0; i < users.length; i++) {
    console.log(users[i].name)
}

for (const usr of users) {
    console.log(usr.age)
}

// For in 반복문

const user = {
    name: 'Heropy',
    age: 85,
    isValid: true,
    email: 'thesecon@gmail.com'
}

for (const key in user) {
    console.log(key)
    console.log(user[key])
}