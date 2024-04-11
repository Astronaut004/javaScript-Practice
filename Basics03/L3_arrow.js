const user = {
    username: "Aryan",
    price: 99,

    welcomeMesage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // it gives all values present in current context gievs a whole current context of object
    }
    // this refers to the current context
}

// user.welcomeMesage();
// user.username = "Kaju";
// user.welcomeMesage();
// console.log(this); // here it gives empty object {}

// browser ke ander global object hai window

function chai() {
    // let username = "Aryan"
    console.log(this); // print all information regarding object its prototype vgra faltu ki backati
    // functions ke andr this keyword use nhi hota
    // this.username give undefined 
}

// chai();

// method 2
// const cha = function () {
//     let username = "hitesh";
//     console.log(this.username);
// }
// cha();

// method 3

const cha = () => {
    let username = " hitesh"
    // console.log(this.username); // undefined
    console.log(this); {}
} 
cha();

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ARROW FUNCTION++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/

// () => {} arrow function

// hold in variable 
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) => ({username: "Aryan"}) // error without {}



console.log(addTwo(3,4)) 