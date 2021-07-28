import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import DisplayInt from './components/DisplayInt';
import Hello from './components/Hello';
import DisplayBGColor from './components/DisplayBGColor';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/welcome/:id" />
        <DisplayInt path="/displayInt/:id" />
        <Hello path="/hello/:id" />
        <DisplayBGColor path="/bgcolor/:divColor/:textColor/:str" />
      </Router>
    </div>
  );
}

export default App;
