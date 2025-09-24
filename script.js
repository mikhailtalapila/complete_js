'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// FIXME:
// Data

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// console.log(containerMovements.innerHTML);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

//splice
// console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
//
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
//
// //join
// console.log(letters.join(' - '));
//

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));
//
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log('jonas'.at(1));
// console.log('jonas'.at(-1));

// for (const [i, movement] of movements.entries()) {
//   // for (const movement of movements) {
//   if (movement > 0) console.log(`Movement ${i} you deposited ${movement}`);
//   else console.log(`Movement ${i} you withdrew ${Math.abs(movement)}`);
// }
// console.log('--foreach--');
//
// movements.forEach(function (movement, i, array) {
//   if (movement > 0) console.log(`Movement ${i + 1} you deposited ${movement}`);
//   else console.log(`Movement ${i + 1} you withdrew ${Math.abs(movement)}`);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
//
// currencies.forEach(function (value, key, map) {
//   console.log(`${key} ${value}`);
// });
//
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);
// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${value} ${value}`);
// });

// const checkDogs = function (dogsJulia, dogsKate) {
//   let dogsJuliaCopy = dogsJulia.slice(1);
//   dogsJuliaCopy = dogsJuliaCopy.slice(0, dogsJuliaCopy.length - 1);
//   // console.log(dogsJuliaCopy);
//   const combined = [...dogsKate, ...dogsJuliaCopy];
//   // console.log(combined);
//   combined.forEach(function (dog, i) {
//     if (dog < 3) console.log(`Dog number ${i + 1} is still a puppy`);
//     else
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//   });
// };
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// checkDogs(dogsJulia, dogsKate);
// const data1 = [9, 16, 6, 8, 3];
// const data2 = [10, 5, 6, 1, 4];
// checkDogs(data1, data2);
//
//
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//const EuToUsd = 1.1;
//const movementsUsd = movements.map(el => el * EuToUsd);
//console.log(movements);
//console.log(movementsUsd);
//
//let movementsUsdFor = [];
//for (const mov of movements) {
//  movementsUsdFor.push(mov * EuToUsd);
//}
//console.log(movementsUsdFor);
//const movementsDescriptions = movements.map((mov, i) => {
//  return `Movement ${i + 1}:  you ${
//    mov > 0 ? 'deposited' : 'withdrew'
//  } ${Math.abs(mov)}`;
//});
//console.log(movementsDescriptions);
//const account1 = {
//  owner: 'Jonas Schmedtmann',
//  movements: [
//    200, 450, -400, 3000, -650, -130, 70, 1300, 1500, 123, 1235, 1234, -500,
//    -700, -989,
//  ],
//  interestRate: 1.2, // %
//  pin: 1111,
//};
//
//const account2 = {
//  owner: 'Jessica Davis',
//  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//  interestRate: 1.5,
//  pin: 2222,
//};
//
//const account3 = {
//  owner: 'Steven Thomas Williams',
//  movements: [200, -200, 340, -300, -20, 50, 400, -460],
//  interestRate: 0.7,
//  pin: 3333,
//};
//
//const account4 = {
//  owner: 'Sarah Smith',
//  movements: [430, 1000, 700, 50, 90],
//  interestRate: 1,
//  pin: 4444,
//};
//
//const accounts = [account1, account2, account3, account4];
//const displayMovements = function (movements) {
//  containerMovements.innerHTML = '';
//  movements.forEach(function (mov, i) {
//    const type = mov > 0 ? 'deposit' : 'withdrawal';
//    const html = `
//        <div class="movements__row">
//          <div class="movements__type movements__type--${type}">${
//      i + 1
//    } ${type}</div>
//          <div class="movements__value">${mov}</div>
//        </div>
//    `;
//    containerMovements.insertAdjacentHTML('afterbegin', html);
//  });
//};
//const calcPrintBalance = function (movements) {
//  const balance = movements.reduce((acc, curr) => acc + curr, 0);
//  labelBalance.textContent = `$${balance}`;
//};
//
//calcPrintBalance(account1.movements);
//
//displayMovements(account1.movements);
//const createUsernames = function (accts) {
//  accts.forEach(function (acc) {
//    acc.username = acc.owner
//      .toLowerCase()
//      .split(' ')
//      .map(el => el[0])
//      .join('');
//  });
//};
//createUsernames(accounts);
//console.log(accounts);
//const deposits = movements.filter(function (el) {
//  return el > 0;
//});
//console.log(deposits);
//const depositsFor = [];
//for (const el of movements) if (el > 0) depositsFor.push(el);
//console.log(depositsFor);
//const withdrawals = movements.filter(el => el < 0);
//console.log(withdrawals);
//console.log(movements);
//const balance = movements.reduce(function (acc, curr, i, arr) {
//  console.log(`Current balance: ${acc}$`);
//  return acc + curr;
//}, 1000); //initial value of the accumulator
//console.log(balance);
//
//let balance2 = 0;
//for (const mov of movements) balance2 += mov;
//console.log(balance2);
//const balance3 = movements.reduce((acc, curr) => acc + curr, 50);
//console.log(balance3);
//
////Maximum value of the movements array
//const maxValue = movements.reduce((acc, curr) => {
//  if (acc > curr) return acc;
//  else return curr;
//}, movements[0]);
//console.log(maxValue);
//

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = function (ages) {
//   return ages.map(function (el) {
//     if (el <= 2) return el * 2;
//     else return 16 + el * 4;
//   });
// };
const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

// const humanAges = calcAverageHumanAge(dogAges1);
// const filtered = humanAges.filter(el => el > 18);
// const totalAge = filtered.reduce(function (acc, curr) {
//   return acc + curr;
// }, 0);
// const average = filtered.reduce((acc, curr, i, arr) => {
//   return acc + curr / arr.length;
// }, 0);

// const calcAverageHumanAge = function (ages) {
//   const average = ages
//     .map(el => (el <= 2 ? el * 2 : 16 + el * 4))
//     .filter(el => el > 18)
//     .reduce((acc, el, i, arr) => {
//       acc + el / arr.length;
//     }, 0);
//   return average;
// };
//

// const calculateAverageArrFunction = ages =>
//   ages
//     .map(el => (el <= 2 ? el * 2 : 16 + el * 4))
//     .filter(el => el > 18)
//     .reduce((acc, el, i, arr) => acc + el / arr.length, 0);
//
// console.log(calculateAverageArrFunction(dogAges1));
// console.log(calculateAverageArrFunction(dogAges2));
// console.log(calcAverageHumanAge(dogAges1));
// console.log(`total is ${totalAge}`);
// console.log(`average is ${totalAge / filtered.length}`);
// console.log(`another average is ${average}`);
// console.log(humanAges);
// console.log(filtered);
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// const total = movements
//   .filter(el => el > 0)
//   .map((el, i, arr) => {
//     // console.log(arr);
//     return el * eurToUsd;
//   })
//   //.map(el => el * eurToUsd)
//   .reduce((acc, curr) => acc + curr, 0);
// // console.log(total);
//
// const calcDisplaySummary = function (movements) {
//   const incomes = movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov);
//   labelSumIn.textContent = `${incomes}$`;
//   const out = movements.filter(el => el < 0).reduce((acc, mov) => acc + mov);
//   labelSumOut.textContent = `${Math.abs(out)}$`;
//   const interest = movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * 1.2) / 100)
//     .filter((int, i, arr) => {
//       //console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `$${interest}`;
// };
// calcDisplaySummary(movements);
