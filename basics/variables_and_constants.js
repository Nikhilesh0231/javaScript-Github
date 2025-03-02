const accountId = 23643839
// accountId = 98376398//Not alowed as //TypeError: Assignment to constant variable.
console.log(accountId);
let accountEmail = "nikhil@google.com"
var accountPassword = "1234455"//It's recommended to not use var because it has no scope 
{
    var accountPassword = "ndkf932ewiwe"
}
console.log(accountPassword);//here ndkf932ewiwe
//but this problem cannot be seen in let 

{
    let accountEmail = "veeru@gmail.in"
    console.log(accountEmail);//veeru@gmail.in
}
console.log(accountEmail);//nikhil@google.com


accountCity = "Prayagraj"

accountEmail = "nikhilesh@gmail.in"
accountPassword = "9875242"
accountCity = "Gurgaon"

console.table([accountId,accountEmail,accountPassword,accountCity])
// ┌─────────┬──────────────────────┐
// │ (index) │ Values               │
// ├─────────┼──────────────────────┤
// │ 0       │ 23643839             │
// │ 1       │ 'nikhilesh@gmail.in' │
// │ 2       │ '9875242'            │
// │ 3       │ 'Gurgaon'            │
// └─────────┴──────────────────────┘