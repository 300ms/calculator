import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, bgColor, width } = props;
  let className = 'button';
  if (bgColor === oranges) className += 'button-orange';
  if (width) className += 'buttonBig';

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
