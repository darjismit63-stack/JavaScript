function sayMyName(){
    console.log("S");
    console.log("M");
    console.log("I");
    console.log("T"); 
}

sayMyName()

// function addTwonumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwonumbers(5, 5)

function addTwonumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwonumbers(5, 5)
console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username"); 
        return
    }
    return `${username} just logged in`
 }
// console.log(loginUserMessage("smit"));

console.log(loginUserMessage());


function calculatCartPrice(...num1){
    return num1
}

console.log(calculatCartPrice(200, 400, 500, 2000));

const user = {  // "user"  ae object chhe
    username: "smit",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); 
}
// handleObject(user)
handleObject({
    username: "smit",
    price: 500
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));
