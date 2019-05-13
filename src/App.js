import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './view/home/Home';
import Login from './view/home/Login';

class App extends React.Componet  {
  sander() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route path="/" componet={Home}></Route>
            <Route path="/home" componet={Home}></Route>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
