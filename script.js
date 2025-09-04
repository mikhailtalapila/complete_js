'use strict';
//console.log(me);
//console.log(job);
//console.log(year);

var me = 'Mikhail';
let job = 'teacher';
const year = 1991;
//console.log(addDecl(2, 3));
//console.log(addExp);
//console.log(addExp(2, 3));
//console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExp = function (a, b) {
//   return a + b;
// };
// var addArrow = (a, b) => a + b;

// console.log(numProducts);
// if (!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

//var x = 2;
//let y = 1;
//const xe = 3;
//console.log(y === window.y);
//console.log(x === window.x);
const calcAge = function (birthYear) {
  //console.log(2037 - birthYear);
  //console.log(this);
};
//calcAge(1983);

const calcAgeArrow = birthyear => {
  //console.log(2037 - birthyear);
  //console.log(this);
};
//calcAgeArrow(1983);
// const mikhail = {
//   year: 1983,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// //mikhail.calcAge();

// const jonas = {
//   year: 2012,
// };
// jonas.calcAge = mikhail.calcAge;
// //jonas.calcAge();
// const f = jonas.calcAge;
// console.log(f);
// f();

// var firstName = 'tammy';
// const mikhail = {
//   firstName: 'Mikhail',
//   year: 1983,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMillenial();
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: function () {
//     console.log(`hey ${this.firstName}`);
//     console.log(this);
//   },
// };
// mikhail.greet();
// //console.log(this.firstName);
// mikhail.calcAge();

// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// //addExp(2, 3);
// //addExp(2, 3, 4, 5);

// var addArrow = (a, b) => {
//   //console.log(arguments);
//   return a + b;
// };

// addArrow(2, 4);
// const mikhail = {
//   firstName: 'Mikhail',
//   lastName: 'Test',
//   age: 27,
// };

// function marryPerson(person, newLastName) {
//   person.lastName = newLastName;
//   return person;
// }

// const newMikhail = marryPerson(mikhail, 'test3');
// // const otherMikhail = mikhail;
// // otherMikhail.lastName = 'test2';
// console.log('before:', mikhail, newMikhail);

const mikhail = {
  firstName: 'Mikhail',
  lastName: 'Test',
  age: 27,
  family: ['tammy', 'kids'],
};

const mikhailCopy = { ...mikhail };
console.log(mikhail);
mikhail.lastName = 'test2';
console.log(mikhailCopy);
