import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// aws amplify
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {withAuthenticator} from 'aws-amplify-react';
import '@aws-amplify/ui/dist/style.css';

// Components
import Login from './components/login';
import Home from './components/home';

Amplify.configure(aws_exports)

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login></Login>
          </Route>
          <Route path="/home" exact>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App);
