import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Winners from './pages/Winners';
import Allies from './pages/Allies';
import Nominations from './pages/Nominations';
import Ceremonies from './pages/Ceremonies';
import GamePage from './pages/GamePage';
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
        <Route exact path='/winners' render={(props) => <Winners {...props} />}/>
        <Route exact path='/nominations' component={Nominations}/>
        <Route exact path='/games/:id' render={(props) => <GamePage {...props} />} />
        <Redirect exact from="/ceremonies" to="/ceremonies/hall_great_one" />
        <Route exact path="/ceremonies/:page?" component={Ceremonies} />
        <Redirect exact from="/allies" to="/allies/Ben%20Moore" />
        <Route exact path='/allies/:page?' component={Allies} />
      </Switch>
      <Footer />
    </Router>

    </div>
  );
}

export default App;
