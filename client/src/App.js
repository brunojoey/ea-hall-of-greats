import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Winners from "./pages/Winners";
import Allies from "./pages/Allies";
import Nominations from "./pages/Nominations";
import Ceremonies from "./pages/Ceremonies";
import NotFound from "./pages/NotFound";
import GamePage from "./pages/GamePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  return (
    <div id="app" className="page-container">
      <div className="page-container-wrap">
        <Router>
          <Header path={path} setPath={setPath} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/winners"
              render={(props) => <Winners {...props} />}
            />
            <Route
              exact
              path="/nominations"
              render={(props) => <Nominations {...props} />}
            />
            <Route
              exact
              path="/games/:id"
              render={(props) => <GamePage {...props} />}
            />
            <Redirect
              exact
              from="/ceremonies"
              to="/ceremonies/hall_great_one"
            />
            <Route
              exact
              path="/ceremonies/:page?"
              render={(props) => <Ceremonies {...props} />}
            />
            <Redirect exact from="/allies" to="/allies/ben_moore" />
            <Route
              exact
              path="/allies/:page?"
              render={(props) => <Allies {...props} />}
            />
            {/* Acts as a catch all for every link besides the ones above */}
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
