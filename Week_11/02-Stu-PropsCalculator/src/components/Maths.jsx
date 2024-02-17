function Maths(props) {
  let value;

  switch (props.operator) {
    case '+':
      value = props.num1 + props.num2;
      break;
    case '-':
      value = props.num1 - props.num2;
      break;
    case '/':
      value = props.num1 / props.num2;
      break;
    case '*':
      value = props.num1 * props.num2;
      break;
    default:
      console.log('Invalid operation');
      break;
  }

  return <span>{value}</span>
}

export default Maths