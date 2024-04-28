const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// map  returning the elements of array by adding 10 in each value of array 
// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )  // 1st
                .map( (num) => num + 1)   //2nd
                .filter( (num) => num >= 40)  //3rd
/*
        this concept refer as chaining and chaining has no limit
        const newNums = myNumbers.map().map().filter().map()

1st map add 10 to each element in array and return the new values 
2nd map take the modified array from map 1 or map2 take the input that was the output of map2 
then 
3rd filter take input of modified array after map2 
*/
console.log(newNums);

// map 
/*

1. same order follow krti hai as given input values
2. Duplicate values nhi hoti hai isme

*/