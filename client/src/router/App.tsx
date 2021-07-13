import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Signup from "../pages/Signup";

import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "../pages/Contact";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  );
};

export default App;
