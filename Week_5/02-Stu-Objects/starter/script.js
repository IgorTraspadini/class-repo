//WRITE YOUR CODE BELOW

// It's done when the customerOrder object has three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready.
// It's done when the drink name and the number of sugars is logged to the console.
// It's done when, if the order is ready, the message "Ready for pick-up" logs.
// It's done when, if the order is not ready, the message "Still in order queue" logs.

customerOrder = {
  drink_name: "Late",
  number_of_sugar: 0,
  status: true
}

console.log(customerOrder.drink_name)
console.log(customerOrder.number_of_sugar)
console.table(customerOrder)
if (customerOrder.status) {
  console.log("Ready for pick-up")
}
else {
  console.log("Still in order queue")
}