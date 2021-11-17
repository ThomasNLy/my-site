import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

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
      <Router>
        <NavBar />
        <div className="container">
          <div className="page-content">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/covid-stats-can" element={<CovidStatsCan />} />
              <Route path="/login-system" element={<LoginSystem />} />
              <Route path="/phostop" element={<PhoStop />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
