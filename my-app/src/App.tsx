import React, { useState } from "react";
import { ImportsNotUsedAsValues } from "typescript";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import SingleUser from "./components/SingleUser";
import ListUsers from "./components/ListUsers";
import SingleResource from "./components/SingleResource";
import ListResources from "./components/ListResources";
import Delayed from "./components/Delayed";
import CreateUser from "./components/CreateUser";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <Router>
      <div className="App">
        <Dashboard loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Route path="/myprofile" component={SingleUser} />
        <Route path="/list-users" component={ListUsers} />
        <Route path="/delayed" component={Delayed} />
        <Route path="/list-resources" component={ListResources} />
        <Route path="/single-resource" component={SingleResource} />
        <Route path="/create-user" component={CreateUser} />
        <Route
          path="/login"
          component={() => (
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          )}
        />
        <Route
          path="/"
          exact
          component={() => (
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          )}
        />
        <Route
          path="/register"
          component={() => (
            <Register loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
