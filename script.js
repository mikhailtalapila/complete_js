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

//Recursion - function that calls itself

// var hanoi = function hanoi(disc, src, aux, dst) {
//   if (disc > 0) {
//     hanoi(disc - 1, src, dst, aux);
//     console.log(`Move disc ${disc} from ${src} to ${dst}`);
//     hanoi(disc - 1, aux, src, dst);
//   }
// };
//
// hanoi(3, 'Src', 'Aux', 'Dst');

// var walk_the_DOM = function walk(node, func) {
//   func(node);
//   node = node.firstChild;
//   while (node) {
//     walk(node, func);
//     node = node.nextSibling;
//   }
// };
//
// var getElementsByAttribute = function (att, value) {
//   var results = [];
//   walk_the_DOM(document.body, function (node) {
//     var actual = node.nodeType === 1 && node.getAttribute(att);
//     if (
//       typeof actual === 'string' &&
//       (actual === value || typeof value !== 'string')
//     ) {
//       results.push(node);
//     }
//   });
//   return results;
// };

// var factorial = function factorial(i, a) {
//   a = a || 1;
//   if (i < 2) {
//     return a;
//   }
//   return factorial(i - 1, a * i);
// };
// console.log(factorial(4));

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Pasta', 'Pizza']);
// console.log(ordersSet);
// const setOfLetters = new Set('Mikhail');
// console.log(setOfLetters);
// console.log(setOfLetters.size);
// console.log(setOfLetters.has('i'));
// setOfLetters.add('zz');
// setOfLetters.delete('zz');
// // setOfLetters.clear();
// console.log(setOfLetters);

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
// const staffUnique = [...new Set(staff)];
// //console.log(staffUnique);
// const uniquePositions = new Set(staff).size;
// console.log(uniquePositions);
// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);
// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commonFoods = italianFoods.intersection(mexicanFoods);
//
// console.log(`Intersection:`, commonFoods);
// console.log([...commonFoods]);
//
// const allFoods = italianFoods.union(mexicanFoods);
// console.log(`All foods`, allFoods);
// console.log([...allFoods]);
//
// console.log([...new Set([...mexicanFoods, ...italianFoods])]);
//
//

// const uniqueItalian = italianFoods.difference(mexicanFoods);
// console.log(uniqueItalian);
//
// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log(uniqueMexicanFoods);
//
// const uniqueItalianAndMexicanFood =
//   italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFood);
//
//
// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// const rest = new Map();
// rest.set('name', 'Classic Italian');
// rest.set(1, 'Jersey');
// rest.set(2, 'new York');
// console.log(rest.set(3, 'connecticut'));
// rest
//   .set('categories', ['italain', 'spanish'])
//   .set('test', 'test1, test2, test3')
//   .set('arrays', [1, 2, 3, 4]);
// console.log(rest);
// rest.get(1);
// const time = 21;
// rest.set(true, 'yes we are open');
// rest.set('open', 11);
// rest.set('close', 23);
// rest.set(false, 'no we are closed');
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest.size);
// const arr = [1, 2, 3];
// rest.set(arr, 'test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.get(arr));
// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key}: ${value}`);
//   }
// }
// //const answer = Number(prompt(`pick your answer`));
// const answer = 2;
// // console.log(answer);
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
// console.log([...question]);
// console.log(question.entries());

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

//const events = [...new Set(gameEvents.values())];
//console.log(events);
//
//1
// const events = new Set(gameEvents.values());
// console.log(events);

//2
//gameEvents.delete(64);
//console.log(gameEvents);
//

//3
//const time = [...gameEvents.keys()].pop();
//console.log(time);
//console.log(
//  `An event happened, on average, every ${90 / gameEvents.size} minutes`
//);
//console.log(
//  `An event happened, on average, every ${time / gameEvents.size} minutes`
//);
//
//

//4
// for (const [min, event] of gameEvents) {
//   const halfStr = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${halfStr} HALF] ${min}: ${event}`);
// }

// const plane = 'A320';
//
// console.log(plane[0]);
// console.log('B737'[0]);
// console.log(airLine.length);
//
// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));
// console.log(airLine.indexOf('Portugal'));
//
// console.log(airLine.slice(4));
// console.log(airLine.slice(4, 7));
//
// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ')));
//
// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));
//
// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log(`You got the middle seat`);
//   else console.log(`you got lucky `);
// };
// checkMiddleSeat('23C');
// checkMiddleSeat('23E');
// checkMiddleSeat('11B');
//
// console.log(new String('jonas'));
//
//const airLine = 'TAP Air Portugal';
//console.log(airLine.toLowerCase());
//const passenger = 'jOnaS';
// const passengerTolower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerTolower[0].toUpperCase() + passengerTolower.slice(1);
// console.log(passengerCorrect);
// function fixCapitalization(name) {
//   const lc = name.toLowerCase();
//   const correctName = lc[0].toUpperCase() + lc.slice(1);
//   return correctName;
// }
// // console.log(fixCapitalization('mikHaIL'));
// const email = 'hello@jonas.il';
// const loginEmail = '  hello@Jonas.IL \n';
//
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);
//
// const airLine = 'TAP Air Portugal';
//
// const priceGB = '288,97$';
// const priceUS = priceGB.replace('$', '%').replace(',', '.');
// console.log(priceUS);
//
// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcement.replaceAll('door', 'gate'));
//

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcement.replace(/door/g, 'gate'));
//
//

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));
//
// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('new plane family');
// }
//
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('you are not allowed to board');
//   } else {
//     console.log('welcome aboard');
//   }
// };
//
// checkBaggage('I have a laptop food pocket Knife');
// checkBaggage('socks and camera');
// checkBaggage('got some snacks and gun for protection');

// console.log(`a+very+nice+string`.split('+'));
// console.log('mikhail test'.split(' '));
//
// const [firstName, lastName] = 'mikhail test'.split(' ');
// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);
//
// const capitalizeName = function (name) {
//   let names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };
// const passenger = 'Mikhail and Tammy test';
// capitalizeName('test smith');
// capitalizeName(passenger);

// const message = 'Go to Gate 23';
// console.log(message.padStart(25, '+'));
// console.log('Mikhail'.padStart(25, '+'));
// console.log(message.padEnd(25, '+'));
// console.log('Mikhail'.padEnd(25, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
//
// console.log(maskCreditCard(1234567812345678));
// console.log(maskCreditCard('12345432123423412123'));
//

// const message2 = 'Bad weather... All departures delayed';
// console.log(message2.repeat(5));
//
// const planesInLine = function (n) {
//   console.log(`there are ${n} planes in line ${'--> '.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(2);
//
