import React from "react";
//Components
import Home from "../../components/routes/Home";
import Contact from "../../components/routes/Contact";
//React router components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Content() {
  return (
    <Router>
      <Switch>
        <Route path="/contactus">
          <Contact />
        </Route>
        <Route exact path="">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
