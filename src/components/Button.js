import PropTypes from 'prop-types';

// export default function Button(props) {
//   const button = props;
//   return (
//     <button className="button" type="button">
//       {button.value}
//     </button>
//   );
// }

const Button = (props) => {
  const { value } = props;
  return <button className="button" type="button">{value}</button>;
};

Button.propTypes = {
  value: PropTypes.string,
};

Button.defaultProps = {
  value: '',
};

export default Button;
