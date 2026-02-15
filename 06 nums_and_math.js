const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));  

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // value ne sequence ma gothava mate


// ***************  MATHS  ****************

console.log(Math.abs(-10)); //'-' nu positive ma convert kare chhe
console.log(Math.round(4.6)); // .5 pachhi ni ke pehla ni value ne aagad ke tyani tya j rakhe
console.log(Math.ceil(4.2)); // '4' pachhi point vadhare aave to aene aagad na number ma kari dese
console.log(Math.floor(4.9)); // '4' vali j value lese
console.log(Math.min(7,0,4,6,4,7,4,5,4,9));
console.log(Math.max(7,0,4,6,4,7,4,5,4,9));
console.log(Math.random()); // random value leva mate ane te 0 and 1 ni under j hoy chhe

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)








