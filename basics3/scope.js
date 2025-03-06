let a = 20
var c = 300
// scope
{
 //Block Scope   
let a = 10
const b = 20
var c = 30
console.log("Block Scope",a);

}
// Global Scope
console.log("Gloabal scope",a);
// console.log(b);
console.log(c);


//NestedScope

function One(){
    const username="Nikhilesh"
    function Two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);//Website is not accessible we are outside the scope Two Function Block 
    Two();
}
One();


// Hoisting Problem

// suppose we have function

addOne(6)//in this function call we cannot get any error 
function addOne(num){
    return num + 1;
}

// addTwo(2)//Cannot access 'addTwo' before initialization and this Problem is hoisting Problem
const addTwo = function(num){  
    return num + 2
}
 
