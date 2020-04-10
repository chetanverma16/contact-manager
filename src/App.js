import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Login from './components/login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
