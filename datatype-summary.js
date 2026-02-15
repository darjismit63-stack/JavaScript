// primitive 

// 7 types : string, number, boolean, null, undefined, symbol, bigInt.

const score = 100
const scoreValue = 100.3

const isLoggesIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 67373838373838373n



// reference (non primitive)

// Array, Objects, Functions.

const heros = ["virat", "hardik", "vijay devarconda" ]


let myObj = {
    name: "Smit",
    age: 20,
}


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

console.log(typeof myFunction );




// stack (primitive), heap (non-primitive)

let myYoubename = "smit"
let anothername = myYoubename
anothername = "chaiaurcode"

console.log(myYoubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "smit@gmail.com"
console.log(userOne);
console.log(userTwo);







