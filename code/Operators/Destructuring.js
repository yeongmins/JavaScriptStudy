// 구조 분해 할당(Desturcturing assigment)

const obj = {
    a: 1,
    b: 2,
    c: 3,
    x: 7,
    y: 100
  };
  const { c, ...rest } = obj;
  
  console.log(c, rest);
  