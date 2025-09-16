'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
//
// createBooking('LH123');
// createBooking('LH123', 2, 900);
// createBooking('LS123', 5);
// createBooking('LH123', undefined);

// const flight = 'MG123';
// const jonas = {
//   name: 'Mikhail test',
//   passport: 12311341234,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH1234';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 12311341234) {
//     alert('check in ');
//   } else {
//     alert('wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer(`javascript is best lang`, oneWord);

// const high5 = function () {
//   console.log('high 5');
// };

// document.body.addEventListener('click', high5);

// ['mike', 'test', 'smith'].forEach(high5);
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//
// const greetingHello = greet('hello');
// greetingHello('mikhail');
//
// const greet2 = greeting => name => console.log(`${greeting} ${name}`);
//
// greet2('hey')('Joe');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'John Smith');
// lufthansa.book(239, 'Joe Schmoe');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // book(23, 'Sara Williams');
// book.call(eurowings, 23, 'Sarah Willaims');
// console.log(eurowings);
// book.call(lufthansa, 234, 'mary smith');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Airline',
//   iataCode: 'SW',
//   bookings: [],
// };

// book.call(swiss, 234, 'Henry Shmores');
// console.log(swiss);

// //apply method
// const flightData = [584, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
// console.log(swiss);

// //bing method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Willaim Smith');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Mary Shmoe');

// //with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));
// const addVAT = addTax.bind(null, 0.07);
// console.log(addVAT(100));
// console.log(addVAT(450));

// const addTax2 = function (value) {
//   return function () {
//     return value + value * 0.07;
//   };
// };
// console.log(addTax2(50)());

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addSalesTax = addTaxRate(0.07);
// console.log(addSalesTax(100));
// console.log(addSalesTax(50));

// const buyHat = function (size) {
//   return function (color) {
//     return `Buying ${color} hat ${size} size`;
//   };
// };
// console.log(buyHat(4));
// const buyHatSize7 = buyHat(7);
// console.log(buyHatSize7('white'));

// const exchangeMoney = function (amount) {
//   return function (currencyNeeded) {
//     return `Exchanged ${amount} for ${currencyNeeded}`;
//   };
// };

// const exchange100 = exchangeMoney(100);
// console.log(exchange100('US Dollars'));
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let q = this.question + '\n';
//     for (const answer of this.options) q += answer + '\n';
//     this.options.join('\n');
//
//     console.log(q);
//     const a = Number(prompt(q));
//     if (a !== '1' && a !== '2' && a !== '0' && a !== '3')
//       console.error('Invalid input');
//     else this.answers[Number(a)]++;
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') console.log(this.answers);
//     if (type === 'string') {
//       let output = 'Poll results are ';
//       this.answers.join(',');
//       for (const a in this.answers) output += a + ', ';
//       console.log(output.slice(0, -2));
//     }
//   },
// };
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
//
// poll.displayResults.call({ answers: [4, 2, 4] }, 'string');
//

// const runOnce = function () {
//   console.log(`this will never run again`);
// };
//runOnce();
// (function () {
//   console.log('this will run once');
// })();
// (() => console.log('will never run again'))();
//

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
//
// const booker = secureBooking();
// booker();
// booker();
// booker();
//
// console.dir(booker);
//

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
//
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// h();
// f();
//

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups each with ${perGroup} passengers`);
  }, 1000 * wait);

  console.log(`will start boarding in ${wait} seconds`);
};

boardPassengers(180, 3);
