//Dates

let myDate = new Date();
console.log(myDate);//2025-03-04T09:03:21.755Z 
console.log(myDate.toString());//Tue Mar 04 2025 09:18:05 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Tue Mar 04 2025
console.log(myDate.toISOString());//2025-03-04T09:22:32.137Z
console.log(myDate.toJSON());//2025-03-04T09:22:54.812Z
console.log(myDate.toLocaleDateString());//3/4/2025
console.log(myDate.toLocaleString());//3/4/2025, 9:23:41 AM
console.log(myDate.toLocaleTimeString());//9:23:57 AM

console.log(typeof myDate);//object

//Creating Specific Date
let myCreatedDate = new Date(2023 , 0 ,23);//year month(start from o) date
console.log(myCreatedDate);//2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

//Create a Specific Date with Time

let myDateTime = new Date(2025,2,4,3,3);
console.log(myDateTime.toLocaleString());//3/4/2025, 3:03:00 AM 

let newDate = new Date("2023-01-12");
console.log(newDate.toDateString());//Thu Jan 12 2023


let newDate1 = new Date("01-01-2023");
console.log(newDate1.toDateString());//Sun Jan 01 2023 


let myTimeStamp = Date.now();

console.log(myTimeStamp);//1741082036218 in milisecond

let myCreatedDate1 = new Date();

console.log(myCreatedDate1.getTime());//1741082127697

console.log(Math.floor(Date.now()/1000));// 1741082209 retuned in seconds

console.log(myCreatedDate1.getDate());//return date

console.log(myCreatedDate1.getDay());//retuns day
console.log(myCreatedDate1.getMonth());//returns month
console.log(myCreatedDate1.getFullYear());//returns full year

console.log(myCreatedDate1.toLocaleString('default',{
    weekday:'long',
}));//Tuesday
