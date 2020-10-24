import React from "react";
import { Provider } from "react-redux";

import { store } from "store";
import Router from "router";
import { ScrollDetector } from "components";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <ScrollDetector />
      <Router />
    </Provider>
  );
}

export default App;
