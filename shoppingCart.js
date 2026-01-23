//exporting module
console.log("exporting module");
const shippingCost = 10;
// const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart`);
};

export const addTwoNumbers = function (num1, num2) {
  console.log(num1 / num2);
};

const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} was added to the cart`);
}

export const cart = [];
