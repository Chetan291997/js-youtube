//How data are store in memory or how it got accessed, on this basis data are divided in two parts
//1. Primitive Data (7 types)
// i. String
// ii. Number
// iii. Boolean
// iv. Null 
// v. Undefined 
// vi. Symbol 
// vii. BigInt  

const score = 100;
const scoreVakue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;


// symbol
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const BigNumber = 345535353535353535n;



//2.Reference Types/Non-Primitive Data 
// i. Array
// ii. Object
// iii. Functions

const heros = ['Shaktimaan',"Naagraaj","Doga"];
let myObj ={
    name:"Shiva",
    age: 22,
};

const myFunction = function(){
console.log("Hello world!");
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//type of memory 


// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "CodeWithShiva";
let anotherName = myYoutubeName ;
anotherName = "ChaiAurCode"

console.log(myYoutubeName);
console.log(anotherName);


let UserOne = {
    email: "user@mail.com",
    upi:"user@upi"
}

let UserTwo = UserOne;

UserTwo.email = "user@gmail.com";

console.log(UserOne.email);
console.log(UserTwo.email);
