import './App.css';
import KeyDemo from './KeyDemo';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <KeyDemo numbers = {numbers} />
    </div>
  );
}

export default App;
