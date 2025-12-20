'use strict';
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
//
// const mike = new Person('Mike', 1999);
// console.log(mike);

//1. new {} is created
//2. function is called , this = {}
//3. {} linked to prototype
//4. function automatically return {}

// const john = new Person('John', 1984);
// console.log(john);
// console.log(john instanceof Person);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
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
//1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
//
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
//
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
//
// const bmw = new Car('bmw', 120);
// const mercedes = new Car('mercedes', 95);
//
// bmw.accelerate();
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// bmw.brake();
// bmw.brake();

//class expression
// const PersonCl = class {
//
// }
//class declaration

class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2038 - this.birthYear);
  }
  greet = function () {
    console.log(`hey ${this._fullName}`);
  };
  sayGoodbye() {
    console.log(`goodbye ${this._fullName}`);
  }
  get age() {
    return 2038 - this.birthYear;
  }
  set bornIn(year) {
    this.birthYear = year;
  }
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`given name is not full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
}

// const jessica = new PersonCl('Jessica Smith', 1999);
// jessica.bornIn = 2005;
// console.log(jessica.fullName);
// jessica.fullName = 'john';
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
//
// // PersonCl.prototype.greet = function () {
// //   console.log(`hey ${this.firstName}`);
// // };
// jessica.greet();
// console.log(jessica.hasOwnProperty('greet'));
// console.log(jessica.hasOwnProperty('calcAge'));
// //1. classes are not hoisted
// //2. classes are first-class citizens
// //3. classes are executed in strict mode
// const account = {
//   owner: 'Mike',
//   movements: [1, 2, 3, 4, 4],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// account.latest = 40;
// console.log(account.latest);
//
// const walter = new PersonCl('Walter', 1038);
//
