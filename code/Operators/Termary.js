// 삼항(Ternary)

function getAlert(message) {
    return message ? message : '메시지가 존재하지 않습니다.'
}

console.log(getAlert('안녕하세요~')) 
console.log(getAlert(''))