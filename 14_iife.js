// function rcb(){
//     console.log(`DB CONNECTED`);
// }
// rcb()

(function rcb(){
   // named IIFE 
    console.log(`DB CONNECTED`);
})();

( function team(name) {
    // named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('smit')

