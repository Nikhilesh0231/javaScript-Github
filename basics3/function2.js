function calculateCartPrice(...num1){//here three dots are rest operator
    return num1;
}
console.log(calculateCartPrice(2,400,400));//[ 2, 400, 400 ]


function calculateCartPrice1(val1,val2,...num1){//here three dots are rest operator
    return num1;
}
console.log(calculateCartPrice1(2,400,400,3));//[400,3 ]//its because 2 is stored in val1,and 400 is stored in val2 


const user = {
    username:"Nikhilesh",
    price:100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);//Username is Nikhilesh and price is 100
handleObject({
    username:"Veeru",
    price:223
})//Username is Veeru and price is 223

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));//300
console.log(returnSecondValue([2,3,4,5,6,7,8]));//3