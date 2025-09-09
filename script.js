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
