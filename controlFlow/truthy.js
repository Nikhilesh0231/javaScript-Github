const userEmail = "nktiwari789@email.com"

if(userEmail){//It supposed that email exist and condition is matched
    console.log("Got user email");
} else {
    console.log("Don't have user email");    
}


// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN,
//Truthy values
// Value execept falsy all truthy

//"0",[],'false'," ",{},function(){},



// check for array

let userEmail1 = []

// if(userEmail1){
//     console.log("Array is Empty");    
// }//this is not good way to check the array


if(userEmail1.length === 0){
    console.log("Array is Empty");    
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


// false == '' => true
// false == 0  => true
// 0 == ''     =>true


//Nullish Coalecing Operator(??):  null undefined

let val1;
// val1 = 5 ?? 10
// console.log(val1);//5
// val1 = null ?? 10
// console.log(val1);//10
// val1 = undefined ?? 10
// console.log(val1);//10
val1 = null ?? 10 ?? 15
console.log(val1);//10



//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80?console.log("less than 80") : console.log("Grater than 80");

