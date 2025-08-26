'use strict';

console.log(me);
//console.log(job);
//console.log(year);

var me = 'Mikhail';
let job = 'teacher';
const year = 1995;
console.log(addDecl(2, 3));
//console.log(addExpr(4, 5));
//console.log(addArrow(3, 4));
console.log(addArrow);
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//example
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;
function deleteShoppingCart() {
  console.log('all products deleted');
}

//best practices:
// use const to declare vars - > not vars / use let if need to change the vars
// declare the vars at the top of each scope
// always declare functions before calling them
// even for func declaration , not just function expressions

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
