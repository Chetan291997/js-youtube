const name = "Shiva";
const repoCount = 50;

// console.log(name + " " + repoCount);


// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Shiva-chauhan');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,3);
// console.log(newString);

const anotherString = gameName.slice(6,-2);
// console.log(anotherString);

const newstringOne = "   Shiva  ";
// console.log(newstringOne);
// console.log(newstringOne.trim());


const url = "https://shiva.com/shiva%20chauhan";
console.log(url.replace('%20','-'));
console.log(url.includes('shiva'));
console.log(url.includes('-'));

console.log(gameName.split('-'));

