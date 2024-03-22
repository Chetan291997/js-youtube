let score  = "Shiva";

// console.log(typeof score);  
// console.log(typeof (score));  

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);  
// console.log(valueInNumber);  


// "33" => 33
//"33abc" => NaN (Not A Number)
//true => 1; false => 0
// "Shiva" => NaN


let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);
  
// 1 => true
// 0 => false
// "" => false
//"Shiva" => true

let someNumber = undefined;

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => string 
// true/false => string
// "" => string
// null => string
// undefined => string