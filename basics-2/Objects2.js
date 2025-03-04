// const tinderUser = new Object();//In this way only difference is that this is singletonObject
// console.log(tinderUser);//{}


const facebookUser = new Object();
facebookUser.id = "1"
facebookUser.name = "Saum"
facebookUser.isLoggedIn = false

// console.log(facebookUser);//{ id: '1', name: 'Saum', isLoggedIn: false }

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nikhilesh",
            lastname:"Tiwari",
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);//Nikhilesh




let obj1 = {1:"a",2:"b"} 
let obj2 = {3:"c",4:"d"} 
// let nobj = {obj1,obj2}
// console.log(nobj);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// let obj3 = Object.assign({},obj1,obj2)//
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } 

let obj3 = {...obj1,...obj2}//Best way 
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
// [ '1', '2', '3', '4' ]
// [ 'a', 'b', 'c', 'd' ]
// [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]  
console.log(obj3.hasOwnProperty('2'));//true
console.log(obj3.hasOwnProperty('5'));//false 




const users = [
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:2,
        email:"h@gmail.com",
    },
    {
        id:3,
        email:"h@gmail.com",
    },
]
    
console.log(users[1].id);//2

