"strict mode";
var budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
const getLimit = (limits, user) => limits?.[user] ?? 0;
//pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas",
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
console.log(newBudget1);
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  "movies",
  "Matilda",
);
console.log(newBudget2);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");

const checkExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry,
  );

const markExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, anotherField: "yes" }
      : entry,
  );
// for (const entry of budget)
// if (entry.value < -getLimit(limits, entry.user)) entry.flag = "limit";

const finalBudget = checkExpenses(newBudget3, spendingLimits);
const finalBudget2 = markExpenses(newBudget3, spendingLimits);
console.log(finalBudget2);
console.log(finalBudget);
console.log(newBudget3);

console.log(budget);

const logBigExpenses = function (state, bigLimit) {
  // let output = "";
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)}/ ` : "";
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  const bigExpenses = state
    .filter((entry) =>
      entry.value <= -bigLimit ? `${entry.description.slice(-2)}/ ` : "",
    )
    .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, "");
  // .map((entry) => entry.description.slice(-2))
  // .join("/");

  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 1000);
