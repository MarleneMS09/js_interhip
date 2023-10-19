let sentence = "A long sentence, that would be annoying to type again";
console.log(sentence);
console.log(sentence);

const age = 34;
const price = 12.99;


const names = 'Sandra'; // <== string data type
const whatIsThis = names / 2;

console.log(whatIsThis); // ==> NaN


let myAge = 25;

myAge += 1;
console.log(myAge);



const result = (7 + 5) / 3 - 8;
console.log(result);

// => -4


//const i = 10 + (5 * 2 ** 3) / 4 - 6;
//  === 10 + 5 * 8 / 4 - 6 <== start with the exponents (2 ** 3)
//  === 10 + 40 / 4 - 6 <== then multiplication (5 * 8)
//  === 10 + 10 - 6 <== then division (40 / 4)
//  === 20 - 6 <== then addition (10 + 10 )
//  ==> 14 <== and finally finish with subtraction (20 - 6)

let name = 'Ana';
console.log(`Hello there, ${name}!`);
// ==> Hello there, Ana!

console.log(`${name} walks every day at least ${1 + 2} km.`);
// ==> Ana walks every day at least 3km.


let customer = { firstName: 'Foo', lastName: 'Kim' };
let message = `Hello ${customer.firstName} ${customer.lastName}!!`;
console.log(message);


const fruits = `
1. banana
2. apple
3. orange
4. cherry
`;

console.log(fruits);
// 1. banana,
// 2. apple,
// 3. orange,
// 4. cherry


const favBook = 'My favorite book is "Anna Karenina".';
console.log(favBook); // <== My favorite book is "Anna Karenina".


const mood = "I'm OK.";
console.log(mood); // <== I'm OK.


const nameWoman= 'Ana';
console.log(nameWoman.length); // <== 3




const greeting = 'Hello there!';
console.log(`"${greeting}" is a string and it's length is ${greeting.length}.`);
// "Hello there!" is a string and it's length is 12.
console.log(greeting.charAt(0)); // <== H
console.log(greeting.charAt(1)); // <== e
console.log(greeting.charAt(5)); // <== " "
console.log(greeting.charAt(11)); // <== !
console.log(greeting.charAt(12)); // <== "" as an empty string



/*
const greeting = 'Hello there!';
console.log(greeting[0]); // <== H
console.log(greeting[3]); // <== l
console.log(greeting[9]); // <== r
console.log(greeting[-2]); // undefined




const messages = "Don't be sad, be happy!";
console.log(messages.indexOf("Don't")); // <== 0
console.log(messages.indexOf('t')); // <== 4
console.log(messages.indexOf('Be')); // <== -1 (capitalized Be ≠ lowercased be)
console.log(messages.indexOf('py')); // 20



const messages = "Don't be sad, be happy!";
console.log(messages.indexOf('be')); // <== 6
console.log(messages.indexOf('be', 7)); // <== 1



*/







