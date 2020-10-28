import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "components";
import { Home, GameDetails, Search } from "pages";

export default () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game/:id" exact>
            <GameDetails />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
