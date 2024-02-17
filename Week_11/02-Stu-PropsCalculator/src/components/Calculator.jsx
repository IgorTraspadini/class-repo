// Create a new component named "Maths"
// Render one Maths component in the place of each "?" mark
// Maths should accept 3 props
// num1, operator, and num2
// Maths should return a span tag displaying the result e.g.  19 + 341 = 360
import Maths from "./Maths";

function Calculator() {
  return (
    <>
      <p>19 + 341 = <Maths num1={19} operator={"+"} num2={341}/></p>
      <p>42 - 17 = <Maths num1={42} operator={"-"} num2={17}/></p>
      <p>100 * 3 = <Maths num1={100} operator={"*"} num2={3}/></p>
      <p>96 / 4 = <Maths num1={96} operator={"/"} num2={4}/></p>
    </>
  );
}


export default Calculator;
