// dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {weekday:"long",
    
})
console.log(newDate);










