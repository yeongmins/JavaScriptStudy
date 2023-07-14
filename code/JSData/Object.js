// Object(객체)

const userA = {
    name: 'HEROPY',
    age: 85
}

const userB = {
    name: 'Neo',
    age: 22,
    parent: userA
}

console.log(userB.parent.name)
console.log(userB['parent']['name'])

const users = [userA, userB]

console.log(users[0]['name'])