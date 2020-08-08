import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Winners from './pages/Winners';
import Allies from './pages/Allies';
import Nominations from './pages/Nominations';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
    <Router>
    <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/winners' component={Winners}/>
        <Route exact path='/nominations' component={Nominations}/>
        <Route exact path='/allies' component={Allies}/>
      </Switch>
      {/* <Footer /> */}
    </Router>

    </div>
  );
}

export default App;
