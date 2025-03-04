// ++++++++++++++++++++++ MATH ++++++++++++++++++++++
console.log(Math);

console.log(Math.abs(-4));//4 
console.log(Math.round(4.3));//4 
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.9));//4

console.log(Math.sqrt(25));//5
console.log(Math.pow(2,3));//8

console.log(Math.min(2,4,5,89,23,434,12));//2
console.log(Math.max(2,4,5,89,23,434,12));//434


console.log(Math.random());
console.log(Math.floor(Math.random()*10));//now it retuns the value from 0 to 10


//Now to get value from 10 to 20

const min = 10
const max = 20

value = Math.floor(Math.random()*(max-min+1))+min
console.log(value)
