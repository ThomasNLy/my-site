import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./App.css";

//components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

//pages
import Home from "./components/pages/Home";
import CovidStatsCan from "./components/pages/CovidStatsCan";
import LoginSystem from "./components/pages/LoginSystem";
import PhoStop from "./components/pages/PhoStop";

function App() {
  return (
    <React.Fragment>
      <HashRouter basename="/">
        <NavBar />
        <div className="container">
          <div className="page-content">
            <ScrollToTop />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/covid-stats-can" component={CovidStatsCan} />
              <Route path="/login-system" component={LoginSystem} />
              <Route path="/phostop" component={PhoStop} />
            </Switch>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
