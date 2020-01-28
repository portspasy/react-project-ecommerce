import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

/// this is just a test 
const TestRouter = () => {
  return (
    <div>
       <h1>This is TestRouter inside page!</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/test" component={TestRouter} />
    </div>
  );
}

export default App;
