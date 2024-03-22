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

// console.log(stringNumber);
// console.log(typeof stringNumber);

// 33 => string 
// true/false => string
// "" => string
// null => string
// undefined => string


// *********************************** Operations **********************************

let value = 3 ;
let negValue = -value;
// console.log(negValue);  

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Shiva"
let str3 = str1 + str2 ;
// console.log(str3);

//console.log("1" + 2); // =>12
//console.log(1 + "2");  // =>12
//console.log("1" + 2 + 2);  // =>122
//console.log(1 + 2 + "2");  // =>32

//console.log((3 + 4) * 5 % 3);

// console.log(+true);  //never use such type of conversion
// console.log(+"");     //never use such type of conversion

let num1, num2, num3;
num1 = num2 = num3 = 2 +2;

let gameCounter = 100 ;
++gameCounter;
console.log(gameCounter);

// prefix and postfix

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"