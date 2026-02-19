const user = {
    username: "smit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "virat"
user.welcomeMessage()

console.log(this);

// function rcb(){
//     let username = "smit"
//     console.log(this.username); 
// }

// rcb()

const rcb = () => {
    let username = "smit"
    console.log(this);
    
}
// rcb()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "smit"})

console.log(addTwo(5,5));

// const myNewArray = [10,8,14,10]
// myNewArray.forEach()

