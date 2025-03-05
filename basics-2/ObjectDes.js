const user = {
    name:"Nikhilesh",
    age:22
}

console.log(user.name);//Nikhilesh

//object destructuring

const { name } = user
console.log(name);//Nikhilesh

// also we can change key name while destructuring

const { age:StudentAge } = user
console.log(StudentAge);//22

console.log(user)

