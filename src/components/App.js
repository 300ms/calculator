import PropTypes from 'prop-types';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/calculate';

export default function App(props) {
  const {
    total, next, operation, buttonName,
  } = props;
  const obj = { total, next, operation };

  return (
    <>
      <div className="display-container"><Display /></div>
      <div className="button-panel-container"><ButtonPanel onClick={Calculate(obj, buttonName)} /></div>
    </>
  );
}

App.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
  buttonName: PropTypes.string,
};

App.defaultProps = {
  total: '',
  next: '',
  operation: '',
  buttonName: '',
};
