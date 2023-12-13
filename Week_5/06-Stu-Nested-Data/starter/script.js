//WRITE YOUR CODE BELOW

const menu = {
  drinks: [],
  food: [],
  milk: [],
  size: []
}

const drink = {
  name: '',
  price: 0,
  sizeOpts: [],
  milkOpts: [],
  iced: false,
  sugars: 0
}

let coffee = Object.create(drink);
coffee.name = "coffee";
coffee.price = 2;
coffee.sizeOpts = ["small","medium","large"];
coffee.milkOpts = ["no","normal","vegan"];
coffee.iced = false;
coffee.sugars = 0;

let late = Object.create(drink);
late.name = "late";
late.price = 3;
late.sizeOpts = ["small","medium","large"];
late.milkOpts = ["no","normal","vegan"];
late.iced = false;
late.sugars = 0;

menu.drinks[0] = coffee
menu.drinks[1] = late

console.log(menu.drinks[0].name)
console.log(menu.drinks[0].price)
console.log(menu.drinks[1].price)

for (let i in menu.drinks){
  console.log(menu.drinks[i].sizeOpts)
  console.log(menu.drinks[i].milkOpts)  
}
