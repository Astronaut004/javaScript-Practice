// javascript me comparision operators datatype ko bhi change kr dete hai 
// so hum javascript me kbhi kbhi strict check krte hai...

// for strict check we use ===
// for check/comparision ==

// == it can convert datatype too

console.log("2" == 2);
console.log("2" === 2);

// all operator are used as other languages

// ********************************************************Quick Rivision***********************************************************

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Iron Man", "Thor", "Spider Man"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
/*
        typeof( )      |      result 

        undefined      |      undefined
        null           |      Object
        Number         |      number
        String         |      string
        Boolean        |      Boolean

*/

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Memory in javaScript

// 2 types of memory
/*
1. stack

isme copy milti hai so agr koi change hua copy me to wo effect nhi krega main variable koi

example:
let a = 5;
let b = a;
both a and b has same value but different memory 

2. heap 
it refer to the same memory location with different objects/variables in stack*/

let a1 = {
    name: "Aryan"
}
let a2 = a1;
console.log(a1.name);
console.log(a2.name);
a2.name = "Kaju";
console.log(a1.name);
console.log(a2.name);