'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const mike = new Person('Mike', 1999);
console.log(mike);

//1. new {} is created
//2. function is called , this = {}
//3. {} linked to prototype
//4. function automatically return {}

const john = new Person('John', 1984);
console.log(john);
console.log(john instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
// console.log(Person.prototype);
// john.calcAge();
//
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__ === Person.prototype);
//
// console.log(Person.prototype.isPrototypeOf(mike));
// console.log(Person.prototype.isPrototypeOf(john));
// console.log(Person.prototype.isPrototypeOf(Person));
//
// Person.prototype.species = 'Homo Sapiens';
// // console.log(john.species);
// // console.log(john.hasOwnProperty('species'));
// // console.log(john.hasOwnProperty('firstName'));
// console.log(john.__proto__);
// //Object.prototype
// console.log(john.__proto__.__proto__);
// console.log(john.__proto__.__proto__.__proto__);
//
// console.log(Person.prototype.constructor);
// const arr = [1, 2, 3, 34, 23, 34, 4];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());
//
// const array1 = [1, 1, 2, 3, 3, 4, 4, 6, 1];
// Array.prototype.unique2 = function () {
//   return [...new Set(this)];
// };
// console.log(array1.unique2());
// const h1 = document.querySelector('h1');
// console.log(x => x + 1);
