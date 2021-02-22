import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Signin from './Forms/Signin';
import  Signup  from './Forms/Signup';
import {Dashboard, Home} from './Home';
import {NavbarD} from './layouts/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// import ModalOpen from './Modal';

function App() {

  return (
    <Router>
        <NavbarD/>
      <Switch>
      <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route path="/sign-in">
        <Signin/>
      </Route>
      <Route path="/sign-up">
        <Signup/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
