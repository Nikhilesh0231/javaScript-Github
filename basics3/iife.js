//Immediately Invoked Function Expression (IIFE)

(function db(){
    //named iife
    console.log(`DB Connected`);    
})();
    
(()=>{
    //unammed iife
    console.log(`DB2 Connected`);
})();

((name)=>{
    //unamed iife with parameter
    console.log(`DB3 Connected ${name}`);
})("Nikhilesh");