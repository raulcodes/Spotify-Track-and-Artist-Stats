import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './components/Authorization/Login';
import Authorize from './components/Authorization/Authorize';
import Stats from './components/Stats/Stats';

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
