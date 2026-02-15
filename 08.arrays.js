// array

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeors = ["shaktiman", "virat kohli"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[2]);

// // Array methods

myArr.push(6)  // push ae elements ne add kare chhe
myArr.push(7)
myArr.pop()  // last ma jee value hase  tene delete kari dese

myArr.unshift(9)  // strating ma value add karva mate
 myArr.shift()  // unshift ma je value add kri hase tene delete kari dese

 console.log(myArr.includes(9)); // result ma value 9 add chhe  ke nai te mate , ane add hase to 'true' and nahi hoy to 'false' aavse
 console.log(myArr.indexOf(3));  // '3' index par kai value chhe te jova mate

 const newArr = myArr.join()
 console.log(myArr);
 console.log(typeof newArr);

 // slice, splice

 console.log("A", myArr);

 const myn1 = myArr.slice(1, 3)
 console.log(myn1);
 console.log("B", myArr);

 const myn2 = myArr.splice(1, 3)
 console.log("C", myArr);
 console.log(myn2);











console.log(myArr);






