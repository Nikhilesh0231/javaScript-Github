const MyNums = [1,2,3]

const initVal = 0;
let myTotal = MyNums.reduce(
    (acc,cval) => acc + cval,initVal
)


console.log(myTotal);//6
