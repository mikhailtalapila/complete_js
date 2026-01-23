//importing module
// import {
//   addToCart,
//   addTwoNumbers,
//   qt as totalQuantity,
//   totalPrice as price,
// } from "./shoppingCart.js";
// import * as ShoppingCart from "./shoppingCart.js";
// console.log("importing module");
// // ShoppingCart.addToCart("bread", 6);
// // ShoppingCart.addTwoNumbers(1, 2);
// // console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);
// //
// import add, { cart } from "./shoppingCart.js";
// add("product", 3);
// add("apple", 3);
// add("pear", 3);

// console.log(cart);

// // const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// // const data = await posts.json();
// // console.log(data);
// // console.log("something else");

// const getLastPost = async function () {
//   const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await posts.json();
//   console.log(data);
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost);
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// lastPost.then((res) => console.log(res));
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 23;
//   const totalPrice = 234;
//   const totalQuantity = 23;
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} was added to the cart`);
//   };
//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} was ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart2.addToCart("apple", 2);
// ShoppingCart2.addToCart("orange", 32);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);
//import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "bread", quantity: 5 },
    { product: "bread", quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
console.log(stateClone);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  getting = "hi";
  constructor(name) {
    this.name = name;
    console.log("hi");
  }
}
const mike = new Person("mike");
// console.log(cart.filter((el) => el.quantity >= 2));
Promise.resolve("test").then((x) => console.log(x));
import "core-js/stable";
import "regenerator-runtime/runtime";
