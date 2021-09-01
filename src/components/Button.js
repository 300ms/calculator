import PropTypes from 'prop-types';

const Button = (props) => {
  const { value, bgColor, width } = props;

  return (
    <button className="button" type="button" style={{ backgroundColor: bgColor, width: `${width}%` }}>
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
  bgColor: '#e0e0e0',
  width: 25,
};

export default Button;
