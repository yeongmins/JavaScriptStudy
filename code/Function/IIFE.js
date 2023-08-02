// 즉시 실행 함수(IIFE, Immediately-Invoked Function Expression)

;((a, b)=> {
    console.log(a.innerWidth)
    console.log(b.body)
})(window, document)