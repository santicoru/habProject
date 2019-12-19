import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './shared/context/auth-context'

import './styles.css';
import { NotFound } from './pages/NotFound';
import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Catalogue } from './pages/Catalogue';
import { Fqa } from './pages/Fqa';
import { Legal } from './pages/Legal';
import { PersonalAccount } from './pages/PersonalAccount';
import { About } from './pages/About';

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
          <Route path='/catalogue'>
            <Catalogue />
          </Route>
          <Route path='/fqa'>
            <Fqa />
          </Route>
          <Route path='/legal'>
            <Legal />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/personalAccount'>
            <PersonalAccount />
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
