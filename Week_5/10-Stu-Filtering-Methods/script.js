/* Create an array of account objects that have a firstName, lastName, and a balance

Use the find method to search through the array and print the first account with a balance equal to $250,000, and print it to the console.

Use the filter method to create a new array of only Users with a last name that begins with the same letter, and  print it to the console. */

let account = [{
  firstname: "Mario",
  lastname: "Dallas",
  balance: 100522
},
{
  firstname: "Danni",
  lastname: "Souza",
  balance: 300522
},
{
  firstname: "Breno",
  lastname: "Almeida",
  balance: 25000
},
{
  firstname: "Diego",
  lastname: "Chavier",
  balance: 25000
}
]

console.log(account.find(function(i){ return i.balance == 25000}))
console.log(account.filter(function(i){ return i.firstname.startsWith("D")}))

