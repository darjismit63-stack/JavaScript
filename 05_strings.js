const name = "smit"
const repoCount = 50

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('smit darji')
console.log(gameName [0]);
console.log(gameName. length);
console.log(gameName. toUpperCase());
console.log(gameName. toLocaleLowerCase());
console.log(gameName. charAt(2)); // koi character kaya position par chhe te jova mate use thay
console.log(gameName. indexOf('t')); //index ma't' ni position kai chhe te sodhva mate use thay 


const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "   smit     "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim() ae starting and ending spaces ne remove kare  chhe

const url = "https://smit.com/smit%20darji"
console.log(url.replace('%20', '_'));
console.log(url.includes('smit')); // 'smit' keyword url ma chhe ke nai te jova mate and hoy to true karse and nahi hoy to false karse

const newGame = "candy-cress-algorithem"
console.log(newGame.split('-'));  // jya jya '-' aave tya thi array ma convert thai jay chhe and '-' ne remove kari de chhe

