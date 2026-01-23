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

// const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await posts.json();
// console.log(data);
// console.log("something else");

const getLastPost = async function () {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await posts.json();
  console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);
const lastPost2 = await getLastPost();
console.log(lastPost2);

// lastPost.then((res) => console.log(res));
