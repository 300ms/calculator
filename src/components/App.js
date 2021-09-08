import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/calculate';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(buttonName) {
//     const newState = Calculate(this.state, buttonName);
//     this.setState(newState);
//   }

//   render() {
//     const { total, next } = this.state;
//     return (
//       <>
//         <div className="display-container"><Display value={next || total || '0'} /></div>
//         <div className="button-panel-container"><ButtonPanel onClick={this.handleClick} /></div>
//       </>
//     );
//   }
// }

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const newState = Calculate({ total, next, operation }, buttonName);
    setTotal(newState.total);
    setNext(newState.next);
    setOperation(newState.operation);
    // console.log(`total : ${total}`);
    // console.log(`next : ${next}`);
    // console.log(`operation : ${operation}`);
  };

  return (
    <>
      <div className="display-container"><Display value={next || total || '0'} /></div>
      <div className="button-panel-container"><ButtonPanel onClick={handleClick} /></div>
    </>
  );
};

export default App;
