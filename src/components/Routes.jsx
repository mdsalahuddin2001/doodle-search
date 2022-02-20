import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Result from "./Result";
function Routes() {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route to="/search">
          <Result />
        </Route>
        <Route to="/images">
          <Result />
        </Route>
        <Route to="/news">
          <Result />
        </Route>
        <Route to="/videos">
          <Result />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
