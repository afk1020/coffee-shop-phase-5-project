import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Containers/Home";

export default function Routes() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
    </>
  );
}