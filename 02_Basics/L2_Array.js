const marvel_hero = ["IronMan","Thor","SpiderMan"];
const dc_hero = ["SuperMan","Flash","BatMan"];

// +++++++++++++++++++++ use push operation ++++++++++++++++

// marvel_hero.push(dc_hero);
// // it will treat dc_hero as a data and push a whole array in marvel_hero and treat it as a single data

// console.log(marvel_hero);
// ++++++++++++++++ use concat++++++++++++

// const all_hero = marvel_hero.concat(dc_hero);
// // it return all the values present in dc and marvel array where each entity of marvel and dc treat as single data and it returns a new array

// console.log(all_hero);


// +++++++++++++++ SPREAD OPERATOR ++++++++++++++++
// // it return all the values present in dc and marvel array where each entity of marvel and dc treat as single data and it returns a new array

const all_hero = [...marvel_hero,...dc_hero];
// console.log(all_hero);

const anotherArray = [1,2,3,4,[5,6,7],5,3,[5,3,[5,6,7],5],89];
const faltyyArray = anotherArray.flat(Infinity);
console.log(faltyyArray);

console.log(Array.isArray("Aryan"));
console.log(Array.from("Aryan"));
console.log(Array.from({name: "Aryan"})); // important for interview revise it why it cannot convert into array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
