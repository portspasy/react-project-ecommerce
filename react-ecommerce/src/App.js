import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";

/// this is just a test
const TestRouter = props => {
  return (
    <div>
      <button onClick={() => props.history.push("/")}>HomePage</button>
      <h1>This is TestRouter inside page!</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/test" component={TestRouter} />
      <Route path="/hats" component={Shop} />
    </div>
  );
}

export default App;
