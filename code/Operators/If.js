// If 조건문

function isPositive(number) {
    if(number > 0) {
        return '양수'
    } else if(number < 0) {
        return '음수'
    } else {
        return '0'
    }
}

console.log(isPositive(1))
console.log(isPositive(-2))
console.log(isPositive(0))