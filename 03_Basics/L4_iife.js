// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`Named iife`);
})();

( (name) => {
    console.log(`simple iife with parameters ${name}`);
})("Aryan");

const user = {
    name: "Aryan",
    phonenumber: 89
};


((user) => {
    console.log(`My name is ${user.name} and my phone number is ${user.phonenumber}`);
})(user);