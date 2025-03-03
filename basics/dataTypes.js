"use strict";//treat all JS code as newr version

// alert("hello");//It generate a pop in a our browser screen and replecated in browser.

console.log(3
    +
    4);//Code is correct but this is not good practice to write code like this because it breaks the code readability very high
console.log("Nikhilesh");

let name = "stringDataType"//string
let age = 18//number
let isLogin = false//boolean
let state;//undefined
let temp = null//null

//typeof
console.table([typeof(name),typeof(age),typeof(isLogin),typeof(state),typeof(temp)])
// ┌─────────┬─────────────┐
// │ (index) │ Values      │
// ├─────────┼─────────────┤
// │ 0       │ 'string'    │
// │ 1       │ 'number'    │
// │ 2       │ 'boolean'   │
// │ 3       │ 'undefined' │
// │ 4       │ 'object'    │
// └─────────┴─────────────┘


//Two main types are 
// 1.Primitive data type /call by value //7 
// 1.string
// 2.number
// 3.boolean
// 4.null
// 5.Undefined
// 6.symbol
// 7.BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)//false


const bigNumber = 3892787328271122112n
console.log(typeof bigNumber);//bigint



// Java Script is dynamically typed language

// 2.Non-rimitive data type/refrence Type
// 1.Arrays
// 2.Objects
// 3.Functions

const heroes = ["shaktiman","Spiderman","superman","doga"]
console.log(typeof heroes);//Object


const student = {
    name:"Veeru",
    age:23,
}
console.log(typeof student);//Object

const myFunc = function() {
    console.log("Hello")
}
myFunc()//Hello
console.log(typeof myFunc)//Function
