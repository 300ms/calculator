import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const newState = Calculate({ total, next, operation }, buttonName);
    setTotal(newState.total);
    setNext(newState.next);
    setOperation(newState.operation);
  };

  return (
    <>
      <div className="display-container"><Display value={next || total || '0'} /></div>
      <div className="button-panel-container"><ButtonPanel onClick={handleClick} /></div>
    </>
  );
};

export default App;
