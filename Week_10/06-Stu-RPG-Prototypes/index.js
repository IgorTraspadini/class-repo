
function Character (name, profession, age, strength, hitPoints) {
  this.name = name
  this.profession = profession
  this.age = age
  this.strength = strength
  this.hitPoints = hitPoints
  this.PrintStats = function (){
    console.log(this.name, this.profession, this.age, this.strength, this.hitPoints);    
  }
}

Character.prototype.isAlive = function () {
  if (this.hitPoints > 0){
    console.log("Is Alive")
  }
  else {
    console.log("Not Alive")
  }
}

Character.prototype.attack = function (input) {
  input.hitPoints -= this.strength;  
}

Character.prototype.levelUp = function (){
  this.age += 1;
  this.strength += 5;
  this.hitPoints += 25;
}

const player = new Character("Igor", "IT", 43, 90, 50);
player.PrintStats();
const player2 = new Character("Joao", "Learner", 25, 70, 30);
player2.PrintStats();
const player3 = new Character("Carlos", "Teacher", 40, 85, 10);
player3.PrintStats();
player.isAlive();
player3.levelUp();
player3.PrintStats();

