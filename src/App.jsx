import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Login from './Login.jsx'
import Authorize from './Authorize.jsx'
import Stats from './Stats.jsx'

const App = () => {
  return (
    <AlertProvider template={AlertTemplate}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/callback" component={Authorize} />
          <Route path="/stats" component={Stats} />
        </Switch>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
