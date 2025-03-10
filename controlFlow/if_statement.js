//if
// if (condition) {
    
// }

const isUserLoggedIn = true

// < , > , <= ,>= ,==,===(it also check for type),!=,!==,
if (isUserLoggedIn) {
     console.log("Executed");
}

const temprature = 42
// if(temprature< 50){
//     console.log(`Temprature is less than 50`);    
// }
// console.log(`Temprature is more than 50`);
//Temprature is less than 50
// Temprature is more than 50


//if else
// if (condition) {
    
// } else {
    
// }
if (temprature < 50) {
    console.log(`Temprature is less than 50`);    
} else {
console.log(`Temprature is more than 50`);
}

//Temprature is less than 50 

const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power : ${power}`);   
}

// console.log(`User Power : ${power}`);  //here we get an error because of the block scope of power variable


const balance = 1000
// implicit scope
if (balance > 500) console.log("test");




if(balance < 500 ){
    console.log("Less than 500");
} else if(balance < 750) {
    console.log("Less than 750");    
} else if(balance < 900){  
    console.log("Less than 900");    
}else{
    console.log("Your balance is more than 900 or 900");    
}



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to Shop");    
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");    
}

if(userLoggedIn || loggedInFromGoogle){
    console.log("Allowed to Shop");    
}