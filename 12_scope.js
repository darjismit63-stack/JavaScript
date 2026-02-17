var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER:" ,a);
}


console.log(a);
//console.log(b);
//console.log(c);

function one(){     // aa nested scope loop chhe.
    const username = "smit"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
   // console.log(website);
    two()
}
    one()


    if (true) {
        const username = "smit"
        if (username === "smit"){
            const website = " Youtube "
            console.log(username + website);
        }
        // console.log(website);  
    }
    //console.log(username);
    

    // +++++++++++++++++++++ intresting ++++++++++++++++++++++++
    console.log(addone(5))
    function addone(num){
        return num + 1
    }
    addone(5)

console.log(addTwo(5))  // aa line ma error aavse.
const addTwo = function(num){
    return num + 2
}
  


