//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// var has no scope


function one(){
    const username = "Aryan"

    function two(){
        const website = "Portfolio"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Aryan"
    if (username === "Aryan") {
        const website = " Portfolio"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // no error

function addone(num){
    return num + 1
}



console.log(addTwo(5)) // error  ++ => access before declaration beacase hosting function in a variable
const addTwo = function(num){ //expressions
    return num + 2
}

/*

        nested scope 
        child function parent function ke variables ko access kr pata hai easily

*/