/*
objects ->> for in loop
array ->> for of and others toolbar
*/


const coding = ["js","ruby","python","Java","cpp"]

/*coding.forEach(function(num){
        console.log(`${num}`);
}   )
*/
// call back function ka koi name nhi hota hai
// for parameter we passed iterator to iterartor the whole array 

// arrow function

// coding.forEach( yha pr callback do)
/*
coding.forEach( (num) => {
    console.log(num);
})
*/

// hum function ko bhi pass kr skte hai but uska reference pass krna hai call nhi krni 
/*
function print(item) {
    console.log(item);
}
coding.forEach(print)*/

// forEach pass krta hai value,index,full array 
/*
coding.forEach((item,index,arr) => {
        console.log(item,index,arr);
});
*/

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`${item.languageName} file extenstion ${item.languageFileName}`);
} )