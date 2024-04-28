const MyDate = new Date();

console.log(MyDate.getDay())
// console.log(MyDate);
// 2024-03-15T21:10:38.667Z
console.log(MyDate.toLocaleTimeString());
// console.log(`here is: ${MyDate.toString()}`);
// here is: Sat Mar 16 2024 02:40:38 GMT+0530 (India Standard Time)


// console.log(`here is ${MyDate.toISOString()}`);
// here is 2024-03-15T21:10:38.667Z

// console.log(`here is ${MyDate.toJSON()}`);
// here is 2024-03-15T21:10:38.667Z

// console.log(`here is ${MyDate.toDateString()}`);
// here is Sat Mar 16 2024

// console.log(`here is ${MyDate.toLocaleDateString}`);
// here is 25/03/2024

// console.log(`here is ${MyDate.toLocaleString()}`);
// here is 16/3/2024, 2:40:38 am

// console.log(`here is ${MyDate.toLocaleTimeString()}`);
// here is 2:40:38 am

// console.log(`here is ${MyDate.toTimeString()}`);
// here is 02:40:38 GMT+0530 (India Standard Time)


// console.log(`here is ${MyDate.toUTCString()}`);
// here is Fri, 15 Mar 2024 21:10:38 GMT


// const DateCreated = new Date(2024, 1, 12);
// const DateCreated = new Date(2024, 1, 12,8,0);
// const DateCreated = new Date("2024-01-12");
const DateCreated = new Date("01-12-2024"); // not giving desired output
console.log(DateCreated.toLocaleString());


let tim = Date.now();
//it gives times in miliseconds it used to compare time stamps in big projects
// console.log(tim);
// console.log(DateCreated.getTime());

// convert milisecond to second
// hemsha comparision milision me hi krna 

console.log(Math.floor(Date.now()/1000))

console.log(MyDate.toLocaleString());
MyDate.toLocaleString('default', {
    weekday: "long",
})
console.log(MyDate.toLocaleString());