import './App.css';
import {BrowserRouter, Link, useNavigate, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './Home';
import Manatee from './CompA';
import Narwhal from './CompB';
import Whale from './CompC';

function App() {
  return (
    <div className="App">
      <h1>Route Demo</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/compA' element = {<Manatee />} />
          <Route path='/compB' element = {<Narwhal />} />
          <Route path='/compC' element = {<Whale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
