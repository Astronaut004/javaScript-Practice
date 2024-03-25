// const score = 400
// console.log(score);

// const value = new Number(100);
// console.log(value);
// console.log(value.toString().length);
// console.log(value.toFixed(1));
// const a = 100.444;

// const money = 1000000;
// console.log(money.toLocaleString('en-IN'));



// +++++++++++++++++++++++++++++++++++++++     MATHS       +++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(2.3));
// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.9));
// console.log(Math.min(2,2,2,3,3,4,1,7))
// console.log(Math.max(2,2,2,3,3,4,1,7))

// random value in javaScript


console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

// ab mujhe random value chahiy or minimum random value 10 honi chaihy isme kamm nhi 
// or value ki range min se max ke beech me random number do
// whereas max-min gives us random numebr
console.log(Math.floor(Math.random()* (max-min - 1) + min));
//ALL Done