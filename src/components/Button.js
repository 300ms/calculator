import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    value, bgColor, width, onClick,
  } = props;
  let className = 'button';

  const handleClick = () => {
    onClick(value);
  };

  if (bgColor === 'orange') {
    className += ' button-orange';
  } else {
    className += ' button-lightGray';
  }

  if (width) {
    className += ' button-big';
  } else {
    className += ' button-small';
  }

  return (
    <button className={className} type="button" onClick={handleClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  value: null,
  bgColor: 'lightGray',
  width: false,
  onClick: () => {},
};

export default Button;
