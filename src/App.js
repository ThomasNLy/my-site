import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./components/pages/Home";
import CovidStatsCan from "./components/pages/CovidStatsCan";
import LoginSystem from "./components/pages/LoginSystem";
import PhoStop from "./components/pages/PhoStop";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <div className="container">
          <div class="page-content">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/covid-stats-can" component={CovidStatsCan} />
              <Route path="/login-system" component={LoginSystem} />
              <Route path="/phostop" component={PhoStop} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
