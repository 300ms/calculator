import PropTypes from 'prop-types';

const Display = (props) => {
  const { value } = props;
  return <div className="display">{value}</div>;
};
// export default class Display extends React.Component {
//   render() {
//     return (
//       <div className="display">
//         {this.props.value}
//       </div>
//     );
//   }
// }

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;
