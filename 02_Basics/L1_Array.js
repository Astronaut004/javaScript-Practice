// console.log('Begin the Array')

const myArray = [1,2,3,4,5,6,"Iron-Man"];
const heros = ["Iron-Man","Thor","SpiderMan"];

const arr = new Array("IronMan","Thor","Captain America",1,2,3,2,4);
// console.log(arr[4]);

// Array methods

// myArray.push(6);
// myArray.pop();

// myArray.unshift(9); // Add a value in front of given array
// myArray.shift(); // removevalue from front of array

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArr = myArray.join(); // values of my Array will be converted to string from object

// console.log(myArray);
// console.log(newArr);

// +++++++++++++++++++++++++++++++++++++++++++++++ slice and splice ++++++++++++++++++++++++++++

console.log("A  "+ myArray)
const nya1 = myArray.slice(1,3);
console.log("B " + myArray);
console.log(nya1);

const nya2 = myArray.splice(1,3);
console.log("C " + myArray);
console.log(nya2);

// slice ye 1 se n-1 tk ki saari values le leta hai or orginal array me kuch manipulation nhi hoti hai

// splice ye 1 se n tk values ko return kr deta or ye main array ko manipulate kr deta hai 
// mean wo  values jo splice ki range me hongi wo original array se gyb ho jayngi

