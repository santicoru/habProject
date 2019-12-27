import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../shared/context/auth-context';

export function PrivateRoute({ children, allowedRole, ...others }) {
  const { role } = useAuth();

  return (
    <Route {...others}>
      {allowedRole === role ? children : <Redirect to="/login" />}
    </Route>
  );
}