import React, { Component } from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Login from './Login.js';
import Stats from './Stats.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }

  render() {
    return (
      <AlertProvider template={AlertTemplate}>
        <Router>
          <div>
            <Route path="/stats" component={Stats} />
            <Route exact path="/" component={Login} />
          </div>
        </Router>
      </AlertProvider>
    );
  }
}

export default App;
