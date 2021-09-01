import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, bgColor, width } = props;
  let className = 'button';

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
    <button className={className} type="button">
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.number,
};

Button.defaultProps = {
  value: '',
  bgColor: 'lightGray',
  width: true,
};

export default Button;
