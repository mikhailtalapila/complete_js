// // 'use strict';

// // // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // const italianFoods = new Set([
// //   'pasta',
// //   'gnocchi',
// //   'tomatoes',
// //   'olive oil',
// //   'garlic',
// //   'basil',
// // ]);

// // const mexicanFoods = new Set([
// //   'tortillas',
// //   'beans',
// //   'rice',
// //   'tomatoes',
// //   'avocado',
// //   'garlic',
// // ]);

// // // Data needed for first part of the section
// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// //   order: function (startedindex, mainindex) {
// //     return [this.starterMenu[startedindex], this.mainMenu[mainindex]];
// //   },
// //   openingHours: {
// //     thu: {
// //       open: 12,
// //       close: 22,
// //     },
// //     fri: {
// //       open: 11,
// //       close: 23,
// //     },
// //     sat: {
// //       open: 0, // Open 24 hours
// //       close: 24,
// //     },
// //   },
// // };

// // // const arr = [2, 3, 4];
// // // const a = arr[0];
// // // const b = arr[1];
// // // const c = arr[2];
// // // const [x, y, z] = arr;

// // // console.log(x, y, z);
// // // console.log(arr);
// // // let [main, , secondary] = restaurant.categories;
// // // console.log(main, secondary);
// // // // const temp = main;
// // // // main = secondary;
// // // // secondary = temp;
// // // [main, secondary] = [secondary, main];
// // // console.log(main, secondary);
// // // const [starter, mainCourse] = restaurant.order(2, 2);
// // // console.log(starter, mainCourse);
// // // const nested = [2, 4, [5, 6]];
// // // // const [i, , j] = nested;
// // // //console.log(i, j);

// // // const [i, , [j, k]] = nested;
// // // console.log(i, j, k); //
// // const [p, q, r] = [9, 8];
// // console.log(p, q, r);
// 'use strict';
// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// //const [firstBook, secondBook] = books;
// //console.log(firstBook, secondBook);
// //
// //
// //const [, , thirdbook] = books;
// //console.log(thirdbook);
// //const ratings = [
// //  ['rating', 4.19],
// //  ['ratingsCount', 144584],
// //];
// //const [[, rating], [, ratingCount]] = ratings;
// //console.log(rating, ratingCount);
// //
// //const ratingStars = [63405, 1808];
// //const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// //console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
// //

// //const ratings = [323, 23];
// //const [oneStar = 0, twoStar = 0, threeStar = 0, fourStar = 0, fiveStar = 0] =
// //  ratings;
// //console.log(oneStar, twoStar, threeStar, fourStar, fiveStar);
// //
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (startedindex, mainindex) {
//     return [this.starterMenu[startedindex], this.mainMenu[mainindex]];
//   },
//   orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
//     console.log(`order reeived. will be delivered to ${address}`);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`here is your pasta with ${ing1} ${ing2} ${ing3}`);
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// //restaurant.orderDelivery({
// //  time: '22:30',
// //  address: 'blabla',
// //  mainIndex: 2,
// //  starterIndex: 2,
// //});
// //restaurant.orderDelivery({
// //  address: 'blabla2',
// //  mainIndex: 2,
// //  starterIndex: 2,
// //});
// //const { name, categories, openingHours } = restaurant;
// //console.log(name, categories, openingHours);
// //
// //const { name: restaurantName, openingHours: hours } = restaurant;
// //console.log(restaurantName, hours);
// //
// //const { menu = [], starterMenu: starters = [] } = restaurant;
// //console.log(menu, starters);
// //
// //let a = 111;
// //let b = 999;
// //const obj = { a: 23, b: 7, c: 14 };
// //({ a, b } = obj);
// //console.log(a, b);
// //
// //const { openingHours } = restaurant;
// //console.log(openingHours);
// //const {
// //  fri: { open: o, close: c },
// //} = openingHours;
// //console.log(o, c);
// const arr = [7, 8, 9];
// //const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// //console.log(badNewArray);
// //
// const newArray = [1, 2, ...arr];
// //console.log(newArray);
// //
// //const newWrongArr = [1, 2, arr];
// //console.log(newWrongArr);

// //console.log(...newArray);

// //const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// //console.log(...newMenu);
// //

// //const mainMenuCopy = [...restaurant.mainMenu];
// //console.log(mainMenuCopy);
// //const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// //console.log(menu);
// //

// //const str = 'Jonas';
// //const letters = [...str, ' ', 's'];
// //console.log(...letters);

// //const ingregients = [
// //  prompt('Lets make pasta! Ingregient 1? '),
// //  prompt('Ing2'),
// //  prompt('ing3'),
// //];
// //console.log(...ingregients);
// //restaurant.orderPasta(...ingregients);

// //Objects
// //const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// //console.log(newRestaurant);
// //
// //const restaurantCopy = { ...restaurant };
// //restaurantCopy.name = 'test2';
// //console.log(restaurant);
// //console.log(restaurantCopy);
// //

// //var sum = function () {
// //  var i,
// //    sum = 0;
// //  for (let i = 0; i < arguments.length; i++) {
// //    sum += arguments[i];
// //  }
// //  return sum;
// //};
// //
// //console.log(sum(1, 2, 3, 4));

// //var add = function (a, b) {
// //  if (typeof a !== 'number' || typeof b !== 'number') {
// //    throw {
// //      name: 'TypeError',
// //      message: 'add needs numbers',
// //    };
// //  }
// //  return a + b;
// //};
// //
// //var try_it = function () {
// //  try {
// //    add('test', 2);
// //  } catch (e) {
// //    console.log(e.name, e.message);
// //  }
// //};
// //
// //try_it();
// /**
//  *
//  */
// //Function.prototype.method = function (name, func) {
// //  this.prototype[name] = func;
// //  return this;
// //};
// //
// //Number.method('integer', function () {
// //  return Math[this < 0 ? 'ceil' : 'floor'](this);
// //});
// //
// //console.log((10 / 3).integer());
// //
// //Function.prototype.method = function (name, func) {
// //  if (!this.prototype[name]) {
// //    this.prototype[name] = func;
// //    return this;
// //  }
// //};
'use strict';

//const arr = [1, 2, ...[3, 4]];
//const [a, b, ...others] = [1, 2, 3, 4, 5];
//console.log(others);
//
//const [pizza, , risotto, ...otherFood] = [
//  ...restaurant.mainMenu,
//  ...restaurant.starterMenu,
//];
//
//console.log(pizza, risotto, ...otherFood);
//
//const { thu, fri, ...weekend } = { ...restaurant.openingHours };
//console.log(thu, fri);
//console.log(weekend);
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
//
// add(2, 3);
// add(5, 4, 3, 4);
//
// const x = [23, 5, 7];
// add(...x);
// restaurant.orderPizza('mushrooms', 'onion', 'olive', 'spinach');
//

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);
//
// console.log(undefined || 0 || '' || 'hello' || null);

//restaurant.numGuests = 23;
//const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guests1);
//
//const guests2 = restaurant.numGuests || 12;
//console.log(guests2);
//
//console.log(0 && 'Jonas');
//
//console.log(7 && 'Jonas');
//
//console.log('hello' && 23 && 'null' && 'Jonas');
//if (restaurant.orderPizza) {
//  restaurant.orderPizza('mushrooms', 'olives');
//}

//restaurant.orderPizza && restaurant.orderPizza('mushrooms');
// restaurant.numOfGuests = 0;
// // const guests = restaurant.numOfGuests || 12;
// // console.log(guests);
//
// const guestsCorrect = restaurant.numOfGuests ?? 10;
// console.log(guestsCorrect);

//const searchResult = {
//  providersWithFiveStarReviews,
//  serviceProvidersCount: 10,
//  serviceProviders: [
//    {
//      id: 10,
//      name: 'Johnson',
//    },
//    {
//      id: 11,
//      name: 'Smith',
//    },
//  ],
//};
//
//const fiveStartReviews = searchResult.providersWithFiveStarReviews ?? 10;
//console.log(fiveStartReviews);

// const rest1 = {
//   name: 'Test1',
//   numGuest: 0,
// };
//
// const rest2 = {
//   name: 'Test2',
//   owner: 'mikhail',
// };
// //
// //rest1.numGuest = rest1.numGuest || 10;
// //rest2.numGuest = rest2.numGuest || 10;
// //
// // rest1.numGuest ||= 10;
// // rest2.numGuest ||= 10;
//
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;
//
// // rest2.owner = rest2.owner && 'anonymous';
// // rest1.owner = rest1.owner && 'anonymous';
//
// rest1.owner &&= 'anonymous';
// rest2.owner &&= 'anonymous';
//
// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
//1
// const [players1, players2] = game.players;
// console.log(players2);
// //2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// //3
// const allplayers = [...players1, ...players2];
// console.log(allplayers);
// //4
// const playersfinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersfinal);
// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// //6
// function printGoals(...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
//   console.log(players.length);
// }
// printGoals('Lewandowski', 'Messi');
// printGoals(...game.scored);
// //7
// team1 < team2 && console.log('team1 is more likely to win');
// team1 > team2 && console.log('team2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// console.log(menu.entries());
// for (const [i, el] of menu.entries()) {
//   console.log(i, el);
//   console.log(`${i + 1}: ${el}`);
// }
//
// console.log([...menu.entries()]);
//const weekdays = ['mon', 'tues'];
//const ;
// console.log(openingHours);

//console.log(restaurant);
// console.log(restaurant.openingHours.mon?.open);
//const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
//for (const day of days) {
//  //console.log(day);
//  //
//  //console.log(
//  //  `on ${day} we open at ${restaurant.openingHours[day]?.open ?? 'closed'}`
//  //);
//}
//
//console.log(restaurant.orderNew?.(0, 1) ?? 'Method doesnt exist');
//
//const users = [
//  {
//    name: 'jonas',
//    email: 'email@email.com',
//  },
//];
//
//console.log(users[0]?.name ?? 'User array empty');
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order(startedindex, mainindex) {
//     return [this.starterMenu[startedindex], this.mainMenu[mainindex]];
//   },
//   orderPizza(mainIngredient, ...otherIng) {
//     console.log(mainIngredient);
//     console.log(otherIng);
//   },
//   openingHours: {
//     mon: {
//       open: 12,
//       close: 22,
//     },
//     [`you know what day it is ${2 + 3}`]: {
//       open: 11,
//       close: 23,
//     },
//     tues: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };
// const openingHours = {
//   mon: {
//     open: 12,
//     close: 22,
//   },
//   tues: {
//     open: 11,
//     close: 23,
//   },
//   wed: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const properties = Object.keys(openingHours);
// // const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
// let str = `we are open on ${properties.length} days:  `;
// for (const day of Object.keys(openingHours)) {
//   str += `${day}, `;
// }
// console.log(str);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
//1
// for (const [i, el] of game.players.entries()) {
//   console.log(`INTRODUCING THE TEAM ${i + 1}:`);
//   for (const [j, elem] of el.entries()) {
//     console.log(`${i + 1}: ${elem}`);
//   }
// }
// console.log(`And the scorers for the games are`);
//
// for (const [i, el] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${el}`);
// }
//2
// const odds = Object.values(game.odds);
// console.log(odds);
// let average = 0;
// for (const odd of odds) {
//   sum += odd;
// }
// console.log(`the avarage is ${sum / odds.length}`);
// const odds = Object.values(game.odds);
// console.log(odds);
// let avg = 0;
// for (const odd of odds) avg += odd;
// console.log(`average is ${avg / odds.length}`);

//3
// const odds = Object.entries(game.odds);
// for (const [team, odd] of odds) {
//   const teamStr = team === 'x' ? `draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//Bonus
// const gameScorers = {};
// for (const player of game.scored) {
//   gameScorers[player] ? gameScorers[player]++ : (gameScorers[player] = 1);
// }
// console.log(gameScorers);
