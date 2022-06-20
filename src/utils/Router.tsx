import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../pages/About";
import Work from "../pages/Work";
import Contact from "../pages/Contact";
import Site from "../pages/Site";
import React from "react";

export default () => (
  <Router>
    <Route exact path="/">
      <Site />
    </Route>
    <Route exact path="/about/">
      <About />
    </Route>
    <Route exact path="/work/">
      <Work />
    </Route>
    <Route exact path="/contact/">
      <Contact />
    </Route>
  </Router>
);
