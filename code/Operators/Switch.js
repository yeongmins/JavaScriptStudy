// Switch 조건문

function price(fruit) {
    // let p;
    // switch (fruit) {
    //     case 'Apple':
    //         return 1000
    //     case 'Banana':
    //        return 1500
    //     case 'Cherry':
    //         return 2000
    //     default :
    //         return 0
    // }
    if (fruit === 'Apple') {
        return 1000
    } else if (fruit === 'Banana') {
        return 1500
    } else if (fruit === 'Cherry') {
        return 2000
    } else {
        return 0
    }
}

console.log(price('Apple'))
console.log(price('Banana'))
console.log(price('Cherry'))
console.log(price('Hello'))