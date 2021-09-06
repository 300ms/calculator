import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../Logic/calculate';

export default function App() {
  return (
    <>
      <div className="display-container"><Display /></div>
      <div className="button-panel-container"><ButtonPanel /></div>
    </>
  );
}
