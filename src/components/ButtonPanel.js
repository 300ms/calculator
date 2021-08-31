import React from 'react';
import Button from './Button';

const renderButton = (i) => (
  <Button
    value={i}
  />
);

const ButtonPanel = () => (
  <>
    <div className="button-row">
      {renderButton('AC')}
      {renderButton('+/-')}
      {renderButton('%')}
      {renderButton('÷')}
    </div>

    <div className="button-row">
      {renderButton('7')}
      {renderButton('8')}
      {renderButton('9')}
      {renderButton('X')}
    </div>

    <div className="button-row">
      {renderButton('4')}
      {renderButton('5')}
      {renderButton('6')}
      {renderButton('-')}
    </div>

    <div className="button-row">
      {renderButton('1')}
      {renderButton('2')}
      {renderButton('3')}
      {renderButton('+')}
    </div>

    <div className="button-row">
      {renderButton('0')}
      {renderButton('.')}
      {renderButton('=')}
    </div>
  </>
);

export default ButtonPanel;
