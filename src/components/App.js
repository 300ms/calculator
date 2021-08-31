import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default function App() {
  return (
    <div className="app-container">
      <div className="display-container"><Display /></div>
      <div className="button-panel-container"><ButtonPanel /></div>
    </div>
  );
}
