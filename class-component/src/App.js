import './App.css';
import MyClassComponent from './component/MyClassComponent';
import MyComponent from './component/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello from React!
      </h1>
      <MyComponent />
      <MyClassComponent name="Jehrick" />
    </div>
  );
}

export default App;
