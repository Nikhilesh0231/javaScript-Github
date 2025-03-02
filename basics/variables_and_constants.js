const accountId = 23643839
// accountId = 98376398//Not alowed as //TypeError: Assignment to constant variable.
console.log(accountId);
let accountEmail = "nikhil@google.com"
var accountPassword = "1234455"//It's recommended to not use var because it has no scope 
let accountState;
{
    var accountPassword = "ndkf932ewiwe"
}
console.log(accountPassword);//here ndkf932ewiwe
//but this problem cannot be seen in let 
/* Prefer not to use var because of issue in block scope and functional scope */

{
    let accountEmail = "veeru@gmail.in"
    console.log(accountEmail);//veeru@gmail.in
}
console.log(accountEmail);//nikhil@google.com


accountCity = "Prayagraj"

accountEmail = "nikhilesh@gmail.in"
accountPassword = "9875242"
accountCity = "Gurgaon"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
// ┌─────────┬──────────────────────┐
// │ (index) │ Values               │
// ├─────────┼──────────────────────┤
// │ 0       │ 23643839             │
// │ 1       │ 'nikhilesh@gmail.in' │
// │ 2       │ '9875242'            │
// │ 3       │ 'Gurgaon'            │
// │ 4       │ undefined            │         
// └─────────┴──────────────────────┘