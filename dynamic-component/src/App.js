import './App.css';
import DynamicComponent from './DynamicComponent';
import {useState} from "react";

function App() {
  const[comp, setComp] = useState('compA');
  return (
    <div className="App">
      <DynamicComponent comp={comp}/>
      <button onClick={() => {
        setComp('compA');
      }}>Set to Component A</button>
      <button onClick={() => {
        setComp('compB');
      }}>Set to Component B</button>
    </div>
  );
}

export default App;
