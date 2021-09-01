import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, bgColor, width } = props;
  let className = 'button';
  (bgColor === oranges) ? className += 'button-orange' : className += 'button-lightGray';
  if (width) className += 'button-big';

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
  bgColor: lightGray,
  width: true,
};

export default Button;
