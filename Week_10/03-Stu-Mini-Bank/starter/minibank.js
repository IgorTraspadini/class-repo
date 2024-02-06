/* 
Part 1 - Add methods and properties to MiniBank
Update the MiniBank constructor function with methods and properties as follows:

Define a property named statement. Assign an initial value of an array containing the balance parameter passed to the constructor.

Add a setBalance function. This function should receive a value parameter and assign it to the balance property of MiniBank.

Write an updateStatement function that takes in a number and pushes it to the statement array.

Write a getStatement function that returns the statement property.

Write a printStatement function that prints each element in the statement array on its own line.

Write a deposit function that takes a value and performs the following:

Calls updateStatement to record the deposit transaction.
Calls setBalance to update the balance property.
Write a withdraw function that takes a value and performs the following:

Calls updateStatement to record the withdrawal transaction. (Be sure to use a negative number here.)
Calls setBalance to update the balance property.
Part 2 - Create and use a MiniBank instance
Create a new bank object using the MiniBank constructor function.

Print the bank balance.

Deposit some money into the bank object.

Print the bank balance.

Withdraw some money from the bank object.

Print the bank balance. */

function MiniBank(balance) {
  this.balance = balance;
  this.statment = [balance];
  this.setBalance = (input) => {
    this.balance = input;
  }; 
  this.updateStatement = (input) => {
    this.statment.push(input);
  };
  this.getStatement = () => {
    return this.statment;
  }
  this.getBalance = () => {
    return this.balance;
  };
  this.printStatement = () => {
    for (let x in this.statment){
      console.log(this.statment[x]);
    }
  }
  this.deposit = (input) => {
    this.updateStatement(input);
    const Bal = this.balance
    this.setBalance(Bal + input);
  }
  this.withdraw = (input) => {
    this.updateStatement(-input);
    const Bal = this.balance
    this.setBalance(Bal - input);    
  }
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
}


const bk = new MiniBank(0);
bk.printBalance();
bk.deposit(100);
bk.printBalance();
bk.withdraw(50);
bk.printBalance();
bk.printStatement();

