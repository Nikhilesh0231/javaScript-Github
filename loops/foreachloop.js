// array.forEach(element => {
    
    // });
    
  
//1
const coding = ['js','java','python','cpp'];
coding.forEach( function (item) {
    console.log(item);
});

//2
coding.forEach((val) => {
    console.log(val);
});


//3
function printMe(item){
    console.log(item); 
}
coding.forEach(printMe);




coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
});


const myCoding =[
    {
        languageName : "javascript",
        languageFileName :"js",
    },
    {
        languageName : "java",
        languageFileName :"java",
    },
    {
        languageName : "python",
        languageFileName :"py",
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
});

// const values = coding.forEach( (item) => {
//     console.log(item);  
//     return item; //undefined 
// })
// console.log(values);
