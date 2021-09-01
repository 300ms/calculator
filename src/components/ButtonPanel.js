import React from 'react';
import Button from './Button';

const orange = '#f5913e';

const renderButton = (value, bgColor, width) => (
  <Button
    value={value}
    bgColor={bgColor}
    width={width}
  />
);

const ButtonPanel = () => (
  <>
    <div className="button-row">
      {renderButton('AC')}
      {renderButton('+/-')}
      {renderButton('%')}
      {renderButton('÷', orange)}
    </div>

    <div className="button-row">
      {renderButton('7')}
      {renderButton('8')}
      {renderButton('9')}
      {renderButton('X', orange)}
    </div>

    <div className="button-row">
      {renderButton('4')}
      {renderButton('5')}
      {renderButton('6')}
      {renderButton('-', orange)}
    </div>

    <div className="button-row">
      {renderButton('1')}
      {renderButton('2')}
      {renderButton('3')}
      {renderButton('+', orange)}
    </div>

    <div className="button-row">
      {renderButton('0', undefined, 50)}
      {renderButton('.')}
      {renderButton('=', orange)}
    </div>
  </>
);

export default ButtonPanel;
