import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "components";
import { Home, GameDetails } from "pages";

export default () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/game/:id">
            <GameDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
