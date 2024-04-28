// Object ko declare kne ke 2 tareeke hote hai 

// 1. Literal and 2. constructor

// singleton: when object is created by constructor it refers as Singleton
// Object.create



//OBJECT LITERALS

const mySym = Symbol("Key1")

const user = {
    name: "Aryan",
    "full name" : "Aryan Chauhan",
    [mySym]: "Unique", // it won't be a symbol if it is not surrounded by sqaure brackets[]
    age: 18,
    location: "Ghaziabad",
    email: "Ac45@gmail.com",
    isloggedIn: true,
    lastSeen: ["Monday","WEdnesdat"],
}

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]); // this cannot be accssed by dot 
console.log(user[mySym]); // access symbol datatype

user.email = "kaju3403@gmail.com"

// console.log(Object.isSealed(user));
// console.log(Object.isFrozen(user));
// Object.freeze(user);
// after freezing the object no data of object can be updated
// console.log(Object.isSealed(user));
// console.log(Object.isFrozen(user));
console.log(user["email"]);

user.email = "kajuAryan319@gmail.com"

console.log(user["email"]);



user.greeting = function(){
    console.log("Hello Coder");
}
user.greetingTwo = function(){
    console.log(`Hello , ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());