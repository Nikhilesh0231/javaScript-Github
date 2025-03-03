let score = 22

console.log(typeof(score));//number
//or this is also valid
console.log(typeof score);

let newScore = "34"
console.log(typeof newScore);//string

//here the value of new score Stored in string form and we want to perform operations then we want to 
//change it into the number so this is called as conversion

// Number

let newScoreInNumber = Number(newScore);
console.log(typeof newScoreInNumber);//number


//Now if 
let num = "34ab"
let newNum = Number(num);
console.log(typeof newNum);//number
// but this is not actual number beacuse ab is not number
console.log(newNum);//NaN->Not a number

let n1 = null
let newN1 = Number(n1);
console.log(typeof newN1);//number
// but this is not actual number beacuse null is object
console.log(newN1);//0

let un = undefined
let newUn = Number(un);
console.log(typeof newUn);//number
console.log(newUn);//NaN

let bool = true
let newBool = Number(bool);
console.log(typeof newBool);//number
console.log(newBool);//1

let str = "true"
let newStr = Number(str);
console.log(typeof newStr);//number
console.log(newStr);//NaN


//Boolean


// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//true

// let isLoggedIn = ""
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn);//boolean
// console.log(booleanIsLoggedIn);//false

let isLoggedIn = "nikhilesh"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);//boolean
console.log(booleanIsLoggedIn);//true


//String

let someNumber = 433
console.log(typeof someNumber);//number
let stringNumber = String(someNumber)
console.log(typeof stringNumber);//string
console.log(stringNumber);//433


