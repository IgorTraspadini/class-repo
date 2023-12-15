console.log(this);

function helloThis() {
  console.log('Inside this function, this is ' + this);
}
console.log(helloThis());

var child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

console.log(child.ageTenYears())

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

console.log(investor.investment.investmentGrowth())