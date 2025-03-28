const PromiseOne = new Promise(function(resolve,reject){
    //Do any asynchronous task
    setTimeout(function(){
        console.log("Promise is executed");
        resolve();
    },2000);
})

PromiseOne.then(function(){
    console.log("Promise is resolved");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise2");
        resolve();
    }
    ,1000);
}).then(function(){
    console.log("Promise2 is resolved");
})


const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve({
            name:"John",
            age:22
        })
    },1000);
})

PromiseThree.then(function(data){
    console.log(data);
    console.log(data.name);
    console.log(data.age);
})



const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error;
        error = true;
        // error = false;
        if(error){
            reject("Error occurred");
        }
        resolve({
            username:"tnikhilesh",
            password:"ksamdksam"
        }); 
    },2000);
})
PromiseFour.then(function(data){
    console.log(data);
    return data.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Promise is completed");
})

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error;
        error = true;
        // error = false;
        if(error){
            reject("some error occurred");
        }
        resolve({
            username:"nikhilesh",
            password:"ksamdksam"
        }); 
    },3000);  
})


//Understanding async await

async function consumePromiseFive(){
    try {
        const data = await PromiseFive;
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive();




async function getAllUsers(){
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await data.json();
        console.log(users);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
   response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Fetch is completed");
})