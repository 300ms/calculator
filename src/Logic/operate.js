import Big from 'big.js';

const operate = (number1, number2, operation) => {
//   if (number1 === undefined || number1 === null) {
//     number1 = 0; // eslint-disable-line no-param-reassign
//   }

  //   if (number2 === undefined || number2 === null) {
  //     number2 = 0; // eslint-disable-line no-param-reassign
  //   }

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
