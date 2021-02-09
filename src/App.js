import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import {Signin} from './Forms/Signin';
import { Signup } from './Forms/Signup';
// import ModalOpen from './Modal';

function App() {

  return (
    <Switch>
      <Route path="/sign-in">
      <Signin/>
    </Route>
    <Route path="/sign-up">
      <Signup/>
    </Route>
    </Switch>
  );
}

export default App;
