// TODO: Import `maths.js`
const {sum, difference, product, quotient} = require('./maths.js');
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const arg1 = parseInt(process.argv[3]);
const arg2 = parseInt(process.argv[4]);

switch (operation) {
  case 'sum':
  case '+':
    console.log(sum(arg1, arg2));
    break;
  case 'difference':
  case '-':
    console.log(difference(arg1, arg2));
    break;
  case 'product':
  case '*':
    console.log(product(arg1, arg2));
    break;
  case 'quotient':
  case '/':
    console.log(quotient(arg1, arg2));
    break;

  default:
    console.log("error")
    break;
}
// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
