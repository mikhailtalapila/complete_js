//importing module
// import {
//   addToCart,
//   addTwoNumbers,
//   qt as totalQuantity,
//   totalPrice as price,
// } from "./shoppingCart.js";
// import * as ShoppingCart from "./shoppingCart.js";
console.log("importing module");
// ShoppingCart.addToCart("bread", 6);
// ShoppingCart.addTwoNumbers(1, 2);
// console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);
//
import add, { cart } from "./shoppingCart.js";
add("product", 3);
add("apple", 3);
add("pear", 3);

console.log(cart);
