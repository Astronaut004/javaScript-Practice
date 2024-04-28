// loops
// "for of" loop
const arr = [1,2,3,4,5];
for (const i of arr) {
    // console.log(i);
}

// it also works on strings for accessing character by character

const greetings = "Hello World"
for (const it of greetings) {
    if(it == ' ') {
        continue
    }
    // console.log(it);
}


//MAP
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France");
map.set('IN', "India") // it ignores the duplicated values

//  console.log(map); 
//  complete map print hoga with its values and keys
/* Map(3) {
     'IN' => 'India',
     'USA' => 'United States of America',
     'Fr' => 'France'
   }
*/
for (const key of map) {
    // console.log(key);
    /* it gives the key and value of each map in each array 
    [ 'IN', 'India' ]
    [ 'USA', 'United States of America' ]
    [ 'Fr', 'France' ]
    */
}

for (const [key,value] of map) {
    // console.log(key,':-',value);
    // it can easily access any value wether it is key or value 
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


//objects are not iterable through "for of" loop
for (const [key,value] of myObject) {
    // console.log(key,':-',value);
}