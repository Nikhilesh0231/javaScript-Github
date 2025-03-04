//Array

const myArr = [0,1,2,3,4,5,6,];

console.log(myArr[4]);//4

const myHeroes = ["Shaktiman","Naagraj"]

const myArr2 = new Array(1,2,3,4,5,6);

console.log(typeof myArr2);//object

//Array Methods

myArr.push(7);
myArr.push(10);
console.log(myArr);

myArr.pop()
console.log(myArr);


myArr.unshift(8)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(0));//true
console.log(myArr.indexOf(0));//0

const newArr = myArr.join();//i return array in string type 
console.log(newArr);  

//slice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);//[ 1, 2 ]


// splice

const myn2 = myArr.splice(1,3);
console.log(myn2);//[ 1, 2, 3 ]
console.log(myArr);//[ 0, 4, 5, 6, 7 ]

