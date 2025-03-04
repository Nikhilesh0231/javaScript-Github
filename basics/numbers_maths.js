const score = 400;

console.log(score);//400


const balance = new Number(400);

console.log(balance);//[Number: 400]  

console.log(balance.toString());//400
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//400.00
console.log(balance.toFixed(1));//400.0

const otherNum = 23.739898
console.log(otherNum.toPrecision(3));//23.7
console.log(otherNum.toPrecision(2));//24  

const hundreds = 1000000
console.log(hundreds.toLocaleString());//1,000,000 bydefault - International 
console.log(hundreds.toLocaleString('en-IN'));//10,00,000 indian

 
