function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// sayMyName()
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);





function loginUserName(username = "sam") {
    if(!username) {
        console.log("Please enter name: ");
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserName("Aryan"));
// console.log(loginUserName());

function calculate(val1,val2,...num1) { // for n  number of arguments use rest operator (...)
    return num1;
}

// console.log(calculate(5,6,3,5,2,5,2,3));

const user = {
    username: "Aryan",
    price : 999
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Aryan",
    price: 99
});
const mynewArray = [200,400,100,600]

function passArray(getArray) {
    return getArray[1];
}
console.log(passArray(mynewArray));