import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TestComponent from "./TestComponent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard/reports/create">
          <TestComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
