const firstName = "Nikhilesh";
const lastName = "Tiwari";

const repoCount = 50

console.log(firstName+" "+lastName+" has total "+repoCount+" counts");

//String Interpolation  
console.log(`${firstName} ${lastName} has total ${repoCount} counts`);

//another way to declare a string
const newStr = new String('nikhilesh')
console.log(newStr[0])//n
console.log(firstName[0])//N
console.log(newStr.length);//9
console.log(newStr.toUpperCase());//NIKHILESH
console.log(newStr.charAt(4));//i
console.log(newStr.indexOf('h'));//5


const str = "name-veeru"
const slicestr = str.substring(0,4);
console.log(slicestr)//name


const str1 = "TiwariNikhilesh"
const anotherStr1 = str1.slice(-8,14);//ikhiles  
console.log(anotherStr1);

//trim--It removes extra spaces from starting and ending of the string

let fullname = "  Nikhilesh Tiwari  "
console.log(fullname);
console.log(fullname.trim());

const url = "https://Nikhilesh.com/nikhilesh%20tiwari"

console.log(url.replace("%20","-"));//https://Nikhilesh.com/nikhilesh-tiwari

console.log(url.includes("nikhilesh"))//true
console.log(url.includes("Veeru"))//false  

// split - split(seperator,limit)

let splStr = "hi-guys-how-are-you"
let splitedStr = splStr.split("-")
console.log(splitedStr);//[ 'hi', 'guys', 'how', 'are', 'you' ]
//After spliting also we can take individual string in the form of array indices

console.log(splitedStr[0])//hi
console.log(splitedStr[1])//guys
console.log(splitedStr[2])//how


