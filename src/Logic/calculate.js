import Operate from './operate';

function isNumber(item) {
  return item.match(/[0-9]+/);
}

const calculate = (obj, buttonName) => {
  if (obj.total === 'Infinity') {
    obj.total = '0'; // eslint-disable-line no-param-reassign
  }

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      }
      return { next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: `${obj.total}.` };
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: Operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (buttonName === '%') {
    if (obj.total) {
      return { total: (parseFloat(obj.total) / 100).toString() };
    }

    if (obj.next) {
      return { next: (parseFloat(obj.next) / 100).toString() };
    }
  }

  if (!obj.next && !obj.total) {
    return {};
  }

  if (!obj.next) {
    return { operation: buttonName };
  }

  if (obj.operation) {
    return {
      total: Operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
};

export default calculate;
