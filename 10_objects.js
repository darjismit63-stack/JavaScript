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







