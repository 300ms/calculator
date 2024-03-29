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
  if (operation === 'X') {
    return numberOne.times(numberTwo).toString();
  }
  if (operation === '÷') {
    if (number2 === '0') {
      return 'Infinity';
    }
    return numberOne.div(numberTwo).toString();
  }
  throw Error(`Unknown operation '${operation}'`);
};

export default operate;
