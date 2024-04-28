// loops

/*
        "for in" loop
*/

const myObject = {
    js:'javaScript',
    cpp:'C++',
    rb:'ruby',
}
for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}
// for in loops works perfectly fine on objects

// or ye "for in" loop me keys me values aati hai like array ka bhi index aayga 
// "for of" me bss iterator

const program = ["js","rb","py","java","cpp"];
for(const key in program) {
    // console.log(program[key]);
}
const map = new Map();
map.set('In',"India");
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('In',"India")

// ese map me iteration nhi hota hai
/*
for (const key in map) {
    console.log(key);
}

*/