/*
const coding = ["js","ruby","java","python","cpp"]
const values = coding.forEach( (item) => {
    // console.log(item)
    // return item // still kuch save nhi hoga
})
// console.log(values); // give undefined bcuz forEach koi value return nhi krta hai
*/
/*
++++++++++++++++++++++++++++++++++++++  FILTERS  ++++++++++++++++
*/
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4)

// const newNums = myNums.filter( (num) => {
//     return num>4;
// })

// same hi work hai as filter bss thoda lengthy hogya 
// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // accecc book which have genre if history

  let userBooks = books.filter( (bk) => bk.genre === "History")


  // access books which has genre is history and published after 1995
  userBooks = books.filter( (bk) => {
    return bk.genre === "History" && bk.publish >= 1995   
  })

  console.log(userBooks);

  /*
  for Each and Filter use callback function
  */