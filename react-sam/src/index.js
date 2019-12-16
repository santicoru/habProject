import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './shared/context/auth-context'

import './styles.css';
import { NotFound } from './pages/NotFound';
import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
