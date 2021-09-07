import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => {
    props.onClick(buttonName);
  };

  const renderButton = (value, bgColor, width) => (
    <Button
      value={value}
      bgColor={bgColor}
      width={width}
      onClick={handleClick}
    />
  );

  return (
    <>
      <div className="button-row">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('÷', 'orange')}
      </div>

      <div className="button-row">
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('X', 'orange')}
      </div>

      <div className="button-row">
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-', 'orange')}
      </div>

      <div className="button-row">
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+', 'orange')}
      </div>

      <div className="button-row">
        {renderButton('0', undefined, true)}
        {renderButton('.')}
        {renderButton('=', 'orange')}
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func,
};

ButtonPanel.defaultProps = {
  onClick: () => {},
};

export default ButtonPanel;
