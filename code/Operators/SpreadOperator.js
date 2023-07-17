// 전개 연산자(Spread Operator)

function fn(x, y, z) {
    return console.log(x, y, z)
}

fn(1, 2, 3)

const a = [1, 2, 3]
// fn(a[0], a[1], a[2])
// fn(1, 2, 3)
fn(...a)