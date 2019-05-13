import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './view/home/Home';
import Login from './view/login/Login';

class App extends React.Component  {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
