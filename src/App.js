import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";
import "./App.css";
import Signin from "./Forms/Signin";
import Signup from "./Forms/Signup";
import { Dashboard, Home } from "./Home";
import { NavbarD } from "./layouts/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

// import ModalOpen from './Modal';

function App() {
  const [user, setUser] = useState({});
  return (
    <Router>
      <NavbarD user={user} />
      <Switch>
        <Route exact path="/" render={() => <Dashboard user={user}/>} />
        <Route exact path="/sign-in" render={() => <Signin setUser={setUser} />} />
        <Route exact path="/sign-up" render={() => <Signup />} />
      </Switch>
    </Router>
  );
}

export default withRouter(App);
