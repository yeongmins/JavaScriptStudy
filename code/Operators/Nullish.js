// Nullish 병합(Nullish Coalescing)

console.log(null ?? 1) // 1
console.log(undefined ?? 2) // 2
console.log(null ?? undefined) // undifined
console.log(null ?? 1 ?? 2) // 1
console.log(false ?? 1 ?? 2) // false
console.log(0 ?? 1 ?? 2) // 0