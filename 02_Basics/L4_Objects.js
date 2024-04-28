// const tinderUser = new Object(); // singleton OBJECT;
const tinderUser = {};

tinderUser.id = "12abs"
tinderUser.name = "Kaju"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

//objects can be nested 

const regularUser = {
    email : "ac4548817@gmail.com",
    fullnam: {
        userfullname: {
            firstname: "Aryan",
            lastname: "Chauhan"
        }
    }
}

//access nested object values
// console.log(regularUser.fullnam.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

//merging of objects

// const obj3 = (obj1,obj2); // not good practice
// const obj3 = Object.assign({}, obj1,obj2,obj4); // {} is used to store the values of merged objects as assign will return the new object
// don't really used

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

//object in a variable 
const user = [
    {
        id: 1,
        email: "1st"
    },
    {
        id: 1,
        email: "2nd"
    },
    {
        id: 1,
        email: "3rd"
    },
    {
        id: 1,
        email: "4th"
    }
]
// console.log(user[1].email);

// prototypes

// console.log(Object.keys(tinderUser)); // return all keys
// console.log(Object.values(tinderUser)); // return all values
// console.log(Object.entries(tinderUser)); // return all keys and values

// console.log(Object.hasOwnProperty('isLoggedIn')); // check if given entity present or not


const course = {
    coursename: "DSA",
    price: "999",
    courseInstructor: "Aryan"
}

// course.courseInstructor; // have to write this code to access same value again n again
// destructuring of an object 

// const {courseInstructor} = course; // good we can also give another name 
const {courseInstructor: teacher} = course; 
console.log(teacher);

// {} destructing krta hai 



// how we get data from APIs
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]