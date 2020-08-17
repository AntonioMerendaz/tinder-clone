import React from "react";
import Header from "./Header";
import "./App.css";
import TinderCards from "./TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am Chatpage</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
      {/* Header */}
      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}

      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
