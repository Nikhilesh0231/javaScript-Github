const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["spiderman","flash","batman"]


// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);//[ 'thor', 'Ironman', 'spiderman', [ 'spiderman', 'flash', 'batman' ]]
// //to access flash

// console.log(marvel_heroes[3][1]);//flash


const all_heroes = marvel_heroes.concat(dc_heroes)

console.log(marvel_heroes);
console.log(dc_heroes);
console.log(all_heroes);


//spread operator

const vowels = ['a','e','o','i','u']
const consonent = ['b','c','d','f','g']

const alphabets = [...vowels,...consonent]
console.log(alphabets);//['a', 'e', 'o', 'i','u', 'b', 'c', 'd','f', 'g']


let newarr = [1,2,[2,3,[4,5],6],3,4,[8,[9,[10,[11]]]]]
// let simparr = newarr.flat(4);
let simparr = newarr.flat(Infinity);
console.log(simparr);

console.log(Array.isArray("Nikhilesh"))//false
console.log(Array.isArray(simparr))//true

console.log(Array.from("Nikhilesh"));//['N', 'i', 'k','h', 'i', 'l','e','s', 'h']


console.log(Array.from({name:"Nikhiesh",id:1}));//Intersiting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]

