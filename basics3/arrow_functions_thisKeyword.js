const user = {
    username:"Nikhilesh",
    price:1999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to Website`);  
        console.log(this);              
    }

}

user.welcomeMessage()//Nikhilesh, welcome to Website
// {
//     username: 'Nikhilesh',
//     price: 1999,
//     welcomeMessage: [Function: welcomeMessage]
//   }
user.username = "veeru";
user.welcomeMessage();//veeru, welcome to Website
// {
//     username: 'veeru',  
//     price: 1999,
//     welcomeMessage: [Function: welcomeMessage]
// }
console.log(this);//{}



function chai(){
    console.log(this);
}

chai();
// //<ref *1> Object [global] {
//     global: [Circular *1],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Getter]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     structuredClone: [Getter/Setter],
//     atob: [Getter/Setter],
//     btoa: [Getter/Setter],
//     performance: [Getter/Setter],
//     fetch: [Function: fetch],
//     navigator: [Getter],
//     crypto: [Getter]
//   }

function chai1(){
    username = "Nikhilesh"
    console.log(this.userame);//this will not work for function
}

chai1();//undefined


//Arrow Function

// const coffee = function () {
//     let name = "NESCAFE"
//     console.log(this.name);    
// }

// coffee();//undefined

const coffee = ()  => {
    let name = "NESCAFE"
    console.log(this.name);    
}

coffee();//undefined

//Explicit return arrow function
const addTwo = (num1,num2) => {
    return num1 + num2
}

let sum = addTwo(2,3);
console.log(sum);//5

//Implicit return arrow function
const addThree = (num1,num2,num3) => num1+num2+num3
console.log(addThree(1,2,3));//6  

const mulTwo = (num1,num2) => (num1*num2)
console.log(mulTwo(3,3));//9 

// use os parenthesis after arrow is useful if we have return a object

const user11 = (name) => ({user:name,age:18})
console.log(user11("Nikhilesh"))//
// { user: 'Nikhilesh', age: 18 }

