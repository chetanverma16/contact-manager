import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {withAuthenticator} from 'aws-amplify-react'
import '@aws-amplify/ui/dist/style.css';

// Components
import Home from './components/home';
import AddContact from './components/addContact'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/add" exact>
            <AddContact></AddContact>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
