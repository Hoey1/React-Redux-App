import React from "react";
import Header from "./components/header";
import Start from "./components/start";
import PickClass from "./components/pickClass";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RollStats from "./components/RollStats";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/roll-stats">
            <RollStats />
          </Route>
          <Route path="/pick-class">
            <PickClass />
          </Route>
          <Route path="/">
            <Start />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
