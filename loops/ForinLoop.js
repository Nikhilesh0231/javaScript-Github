const myObj = {
    js:"Java Script",
    cpp:"C Plus Plus",
    py:"Python"
}

// for (const key in myObj) {
//     console.log(key);    
//     console.log(myObj[key]);
// }
    for (const key in myObj) {
        console.log(`${key} = ${myObj[key]}`);        
    }

const Programming = ["js","java","py","c","cpp"];

for (const key in Programming) {
    // console.log(key);    
    // console.log(Programming[key]);
    console.log(`At ${key} index the value is ${Programming[key]}`);    
}