// 논리(Logical)

// AND 연산자
console.log(true && false)
console.log(1 && 0)
console.log(1 && 2 && 0)
console.log(1 && 0 && 2)
console.log(0 && 1 && 2)
console.log('A' && 'B' && '')
console.log('A' && 'B' && 'C')

// OR 연산자
console.log(false || true)
console.log(0 || 1)
console.log(false || 0 || {})
console.log(false || [] || null)
console.log(function () {} || undefined || '')
console.log(false || 0 || NaN)