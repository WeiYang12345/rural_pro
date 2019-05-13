import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './view/login/Login';
import Home from './view/home/Home';

class App extends React.Component  {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route exact path="/" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
