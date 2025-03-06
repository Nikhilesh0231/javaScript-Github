function SayMyName(){
    console.log("Nikhilesh");
    console.log("Tiwari");    
}//Function Definition

SayMyName();//Function call


// function addTwoNumbers(num1,num2){//num1,num2 are Parameters
//     console.log(num1+num2);
// } 
// addTwoNumbers(2,5);

function addTwoNumbers(num1,num2){//num1,num2 are Parameters
    // let sum = num1+num2;
    // return sum;
    return num1+num2;
}

let sum = addTwoNumbers(2,3);//2,3 are arguments
console.log(`Sum os two numbers is : ${sum}`);


function loginUserMessage(username){
    return `${username} just logged in`;
}

// let username = loginUserMessage("tnikhilesh");
// console.log(username);//tnikhilesh just logged in

// let username = loginUserMessage("");
// console.log(username);// just logged in

let username = loginUserMessage();
console.log(username);//undefined just logged in 

// to over these problem we can do like this 

function loginUserMessage1(username){
    // if(username===undefined){
    //     console.log("please Enter a username")
    //     return
    // }
    if(!username){
        console.log("please Enter a username")
        return
    }
    return `${username} just logged in`;
}

let username1 = loginUserMessage1();
console.log(username1);//please Enter a username



//To avoid the same problem also we can pass default parameters value
function loginUserMessage2(username="user"){
    return `${username} just logged in`
}

let username2 = loginUserMessage2();
console.log(username2);
let username3 = loginUserMessage2("Nikhilesh");
console.log(username3);
