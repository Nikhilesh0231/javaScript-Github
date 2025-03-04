//singleton-when objects are creatred using constructor
// Object.create

// Object Literals


//Object Declaration
const user = {
    "name first":"veeru",
    firstname:"Nikhilesh",
    lastname:"Tiwari",
    cource:"MCA",
    age:"22",
    location:"Pratapgarh",
    isLoggedIn:true,
    email:"tnikhi@google.com",
    lastLoginDays:["Tuesday","Saturday"]
}


//Accessing Objects using ( . ) "dot" operator
console.log(user.firstname);//Nikhilesh
// console.log(user.name first);//here we can use below way


console.log(user["email"]);//tnikhi@google.com
console.log(user["name first"]);//veeru 

//Symbol using as key and accessing it

const mysym = Symbol("Key1")

let newUser = {
    [mysym] : "keyNo1"
}

console.log(newUser[mysym]);//keyNo1



user.firstname = "Neelesh"
console.log(user["firstname"])//Neelesh   
Object.freeze(user)
//After we can not overrite values while overwirting we can not get any error but we are not able to change it.
user.firstname = "Nikhilesh"
console.log(user);

// {
//     'name first': 'veeru',
//     firstname: 'Neelesh',
//     lastname: 'Tiwari',
//     cource: 'MCA',
//     age: '22',
//     location: 'Pratapgarh',
//     isLoggedIn: true,
//     email: 'tnikhi@google.com',
//     lastLoginDays: [ 'Tuesday', 'Saturday' ]
//   }

let user1 = {
    name:"verru"
}
user1.age = 12

user1.greeting = function(){
    console.log("Hello");
}
console.log(user1.greeting());//Hello

user1.greeting2 = function(){
    console.log(`Hello ${this.name}`)//Hello verru
}
console.log(user1.greeting2());
console.log(user1);
