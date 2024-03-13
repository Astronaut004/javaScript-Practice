 const score = "33";
 const result = "33A";

 console.log(score);
//  console.log(typeof(score));
 console.log(typeof(result));

 let variableToNumber = Number(score);
 let variable = Number(result);

//  console.log(variableToNumber);
//  console.log(typeof(variableToNumber));
 console.log(variable); // it will give a output NaN
 console.log(typeof(variable));

 /* one more example*/
console.log("Example wih null:");
 const a = null;
 let b = Number(a);
 console.log(typeof(b));
 console.log(b);


 /* one more example*/
 /* ek baar review krna pdega kyuki undefined me value NaN aati hai but output 0 aa rha hai
 */
console.log("Example wih undefined:");
 const c = undefined;
 let d = Number(c);
 console.log(typeof(d));
 console.log(d);

 /*
 Notes
            conversion to integer
            "33" => 33
            "33abc" => NaN(Not a Number)
            true => 1, false => 0
            null => NaN
            undefined => NaN

            Conversion to boolean
            1 => true 0 => false
            "" => false
            "Aryan" => true

            conversion to string
            33 => "33"
 */

console.log("From boolean to string: =>");
const u = 0;
let f = String(u);
console.log(f);