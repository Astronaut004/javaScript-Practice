let name = "Aryan";
let marks = 50;

// console.log(name + marks+ "value");
// old way

// modern tareeka

// console.log(`I'm ${name} and I've Score of ${marks}`);

const gameName = new String("aryan Chauhan and Kaju");
// console.log(gameName)
// Here String gameName is a object
// console.log(typeof(gameName))
// console.log(gameName[2])

// Access diferent prototypes

console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('a'));

// substring or slicing in javaScript

console.log(gameName.substring(18,22));
console.log(gameName.slice(0, 4));
/* The `slice` method in JavaScript is used to extract a section of a string and
return it as a new string without modifying the original string. It takes two
parameters - the starting index and the ending index (optional). If the ending
index is not provided, it extracts up to the end of the string. Negative values
can also be used to slice from the end of the string. */ 
console.log(gameName.slice(-20,22));


// Trime and Replace

const merNaam = "       Aryan           ";
console.log(merNaam);
console.log(merNaam.trim());

const url = "https://aryan.com/aryan%Chauhan";
console.log(url);
console.log(url.replace('aryan','kaju'))
console.log(url.replaceAll('aryan','kaju'));

console.log(url)


// string is the most powerful datatype of any language

console.log(url.includes('aryan'))
console.log(url.includes('kaju'))


const naam = "Aryan chauhan from ghaziabad"
console.log(naam);
console.log(naam.split(' '))
console.log(naam.split(' ',3))

// # Study about prototype