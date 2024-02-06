const dog = {
  raining: true,
  noise: "Woof!",
  makeNoise: function (){
    (this.raining?console.log(this.noise):"")
  }
}

const cat = {
  raining: false,
  noise: "Meow!",
  makeNoise: function (){
    (this.raining?console.log(this.noise):"")
  },
}

const massHysteria = function (cat, dog){
  if (cat.raining && dog.raining){
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
}

dog.makeNoise();
cat.makeNoise();
massHysteria(cat, dog);

cat.raining = true;
dog.makeNoise();
cat.makeNoise();
massHysteria(cat, dog);

