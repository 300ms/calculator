import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = Calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next } = this.state;
    return (
      <>
        <div className="display-container"><Display value={total || next || '0'} /></div>
        <div className="button-panel-container"><ButtonPanel onClick={this.handleClick} /></div>
      </>
    );
  }
}
