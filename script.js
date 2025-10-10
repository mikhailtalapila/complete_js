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
// const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
// const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const withdrawal = movements.find(mov => mov < 0);
// console.log(withdrawal);
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [
    200, 450, -400, 3000, -650, -130, 70, 1300, 1500, 123, 1235, 1234, -500,
    -700, -989,
  ],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const createUsernames = function (accts) {
  accts.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(el => el[0])
      .join('');
  });
};
createUsernames(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
// for (let account of accounts) {
//   if (account.owner === 'Jessica Davis') console.log(account);
// }
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGged in');
    labelWelcome.textContent = `welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
  e.preventDefault();
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    a => a.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (amount > 0) {
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    console.log(receiverAccount, amount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount / 10)
  ) {
    currentAccount.movements.push(loanAmount);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('delete');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      i => i.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    inputCloseUsername.value = inputClosePin.value = '';
    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Please login`;
  }
});

const displayMovements = function (movement, sort = false) {
  const movs = sort ? movement.slice().sort((a, b) => {}) : movement;
};
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount.movements, !sorted);
});

// console.log(movements);
// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);
// const lastLargeMovementIndex = movements.findLastIndex(
//   mov => Math.abs(mov) > 1000
// );
// console.log(lastLargeMovementIndex);
// console.log(
//   `Your latest large movement was ${
//     movements.length - lastLargeMovementIndex
//   } movements ago`
// );

// console.log(movements.includes(-130));
//const anyDeposits = movements.some(mov => mov === -130);
//
//// console.log(anyDeposits);
//console.log(movements.every(mov => mov > 0));
//console.log(accounts[3].movements.every(mov => mov > 0));
//
//separate callback
//  const deposit = mov => mov > 0;
//  const largeDeposit = mov => mov >= 1000;
//  console.log(movements.every(largeDeposit));
//  console.log(accounts[3].movements.every(largeDeposit));
//  console.log(accounts[3].movements.some(largeDeposit));
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
//
// const arrDepp = [[[1, 2], 3], [[3, 4], 5], 5, 6];
// console.log(arrDepp);
//
// console.log(arrDepp.flat(2));

// console.log(accounts);
//
// const accountMovements = accounts.map(acc => (acc.movements = movements));
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);
//
// const overallBalance2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);
//
// const overallBalance3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance3);

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   })
// );
// console.log(
//   movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   })
// );
// console.log(movements.sort((a, b) => a - b));
// console.log(movements);
// console.log(movements.sort((a, b) => b - a));
// console.log(movements);
//#1
// const huskyWeight = breeds.find(b => b.breed === 'Husky').averageWeight;
// console.log(huskyWeight);
//
// //#2
// const dogBothActivities = breeds.find(
//   b => b.activities.includes('fetch') && b.activities.includes('running')
// );
// console.log(dogBothActivities);
//
// //#2a
// const dogBothActivities2 = breeds.find(
//   breed =>
//     breed.activities.includes('swimming') && breed.activities.includes('fetch')
// );
// console.log(dogBothActivities2);
// //3. Create an array "allActivities" of all the activities of all the dog breeds
// const allActivities = breeds.map(b => b.activities).flat();
// console.log(allActivities);

//const allActivities2 = breeds.flatMap(b => b.activities);
//console.log(allActivities2);
//4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
//
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// const uniqueActivities2 = breeds.flatMap(breed => breed.activities);
// console.log(uniqueActivities2);
// const uniqueActivities3 = [...new Set(uniqueActivities2)];
// console.log(uniqueActivities3);
// //5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// const swimmingAdjacent = breeds
//   .filter(breed => breed.activities.includes('swimming'))
//   .map(breed => breed.activities)
//   .flat();
// console.log(swimmingAdjacent);
// const breedsSwimmingAdjacent = breeds
//   .filter(breed => breed.activities.includes('fetch'))
//   .map(breed => breed.activities)
//   .flat();
// console.log(breedsSwimmingAdjacent);
// const i = 0;
// const agilityAdjacentActivities = [
//   ...new Set(
//     breeds
//       .filter(breed => breed.activities.includes('swimming'))
//       .map(breed => breed.activities)
//       .flat()
//   ),
// ];
// console.log(agilityAdjacentActivities);
//
// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".

//console.log(breeds.every(breed => breed.averageWeight > 10));
// const adjacentActivitiesToSwimming = breeds.filter(breed =>
//   breed.activities.includes('swimming')
// );
// console.log(adjacentActivitiesToSwimming);
//
// const adjancentActivitiesToFetch = breeds
//   .filter(breed => breed.activities.includes('fetch'))
//   .flatMap(breed => breed.activities)
//   .filter(activity => activity !== 'fetch');
// console.log(adjancentActivitiesToFetch);

// const adjacentActivityToSleeping = breeds
//   .filter(breed => breed.activities.includes('sleeping'))
//   .map(breed => breed.activities)
//   .flat();
// console.log(adjacentActivityToSleeping);
//

// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// console.log(breeds.every(breed => breed.averageWeight > 10));
//7 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
// console.log(breeds.some(breed => breed.activities.length >= 3));
//BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
// const likeToFetchWeights = breeds
//   .filter(breed => breed.activities.includes('fetch'))
//   .map(breed => breed.averageWeight);
// const heaviestFetchBreed = Math.max(...likeToFetchWeights);
// console.log(heaviestFetchBreed);
//

// const breedsLikeToRun = breeds
//   .filter(breed => breed.activities.includes('running'))
//   .map(breed => breed.averageWeight);
// console.log(breedsLikeToRun);
//
// console.log(
//   `Heaviest dog that likes to fetch is ${Math.max(
//     ...breeds
//       .filter(breed => breed.activities.includes('fetch'))
//       .map(breed => breed.averageWeight)
//   )}`
// );
console.log(movements);

const groupedMovements = Object.groupBy(movements, el =>
  el > 0 ? 'deposits' : 'withdrawals'
);
console.log(groupedMovements);

const newGroupedMovements = Object.groupBy(movements, el =>
  el > 0 ? 'deposits' : 'withdr'
);
console.log(newGroupedMovements);
