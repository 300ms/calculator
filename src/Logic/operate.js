import Big from 'big.js';

const operate = (number1, number2, operation) => {
  const numberOne = Big(number1);
  const numberTwo = Big(number2);
  if (operation === '+') {
    return numberOne.plus(numberTwo).toString();
  }
  if (operation === '-') {
    return numberOne.minus(numberTwo).toString();
  }
  if (operation === 'x') {
    return numberOne.times(numberTwo).toString();
  }
  if (operation === '÷') {
    return numberOne.div(numberTwo).toString();
  }
  if (operation === '%') {
    return numberOne.mod(numberTwo).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
};

export default operate;
