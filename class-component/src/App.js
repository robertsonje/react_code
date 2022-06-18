import './App.css';
import CarComponent from './component/CarComponent';
import MyClassComponent from './component/MyClassComponent';
import MyComponent from './component/MyComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello from React!
      </h1>
      <MyComponent />
      <MyClassComponent name="Jehrick" />
      <CarComponent country="America" />
    </div>
  );
}

export default App;
