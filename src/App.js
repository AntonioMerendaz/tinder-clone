import React from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <h1>I am Homepage</h1>
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
