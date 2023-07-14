const a = function () {
    console.log('A')
}

const b = function (c) {
    console.log(c)
    c()
}

b(a)