import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route />
        <Route /> */}
      </Switch>
    </Router>

    </>
  );
}

export default App;
