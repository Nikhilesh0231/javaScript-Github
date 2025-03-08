//for of
// for (const element of object) {
    
// }

// [{},{},{},{}]
// ["","","",""]


const arr = [1,2,3,4,5,6,7,8]

for (const i of arr) {
    console.log(i);  
}


const greet = "Hello World";

for (const s of greet) {
    console.log(`Each Char is ${s}`)
}


//Maps

const map = new Map();
map.set('IN','INDIA')
map.set('USA','United States of America')


map.set('IN','INDIA')//
map.set('IN','INDIA')//
map.set('IN','INDIA')//It can not be added in the map beacuse it can hold only uniqie values.


console.log(map)

for (const i of map) {
 console.log(i);     
}
// [ 'IN', 'INDIA' ]
// [ 'USA', 'United States of America' ]

for (const [key,value] of map) {
    console.log(`key is ${key}`);     
    console.log(`Value is ${value}`);     
   }
 