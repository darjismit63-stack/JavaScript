// singleton

// object literals
// Object.create

const mySym = Symbol("key1")


const jsUser = {
    name: "smit",
    "full name": "smit darji",
    [mySym]:"myKey1",
    age: 20,
    locatin: "debhari",
    email: "smit1014@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser [mySym]);

jsUser.email = "smit10@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "smit@microsoft.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(jsUser.greeting());



jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


const tinderUser = new Object() // or
// const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "smit"
tinderUser.isLoggedIn = false

console.log(tinderUser);

console.log(tinderUser.name);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "smit",
            lastname : "darji"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2 , ...obj4} 
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "smit10@gmail.com" 
    },
       {
        id: 1,
        email: "smit10@gmail.com" 
    },
       {
        id: 1,
        email: "smit10@gmail.com" 
    },
]

users [1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // aa properties chhe ke nahi te mate use thay chee

