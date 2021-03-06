import Color from './Color';
import Counter from './Counter';
import './App.css';
import Component1 from './useStateExample';
import StyleDemo from './StyleDemo'
import UseRefDemo from './UseRefDemo';
import CustomHookComponent from './CustomHookComponent';

function App() {
  return (
    <div className="App">
      <Color />
      <Counter />
      <UseRefDemo />
      <StyleDemo />
      <CustomHookComponent />
    </div>
  );
}

export default App;
