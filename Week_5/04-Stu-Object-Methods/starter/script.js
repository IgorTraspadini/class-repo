//WRITE YOUR CODE BELOW

//It's done when the menu object has properties that store drink names, and prices.
//It's done when an array of the drink names is printed to the console.
//It's done when the total price of the menu is calculated and printed to the console.

const menu = {
  coffee: 2,
  late: 3,
  espresso: 2,
  mocha: 3
}

console.log(Object.keys(menu))
for (let k in menu) {
  console.log(k)
}

let sum = 0;
for (let k in menu) {
  sum += menu[k];
}
console.log("Total price in menu: " + sum)
