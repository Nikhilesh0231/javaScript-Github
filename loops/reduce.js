const MyNums = [1,2,3]

const initVal = 0;
let myTotal = MyNums.reduce(
    (acc,cval) => acc + cval,initVal
)


console.log(myTotal);//6

const newNum = [2,4,6,8,10,12,14,16,18,20];

const myNewTotal = newNum.reduce(
    (acc,val) => acc +val,initVal
)

console.log(myNewTotal)//110