import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login, register } from "../../http";
import decode from 'jwt-decode';

const AuthContext = React.createContext();

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

export function tokenDecode(token) {
  if (currentUser !== null) {
    const { role } = decode(currentUser.token)
    return role;
  }
}
export function AuthProvider({ children }) {

  const [isAuthenticated, setIsAuthenticated] = useState(currentUser !== null);
  const [role, setRole] = useState((currentUser && tokenDecode(currentUser.token)) || null);

  const history = useHistory();

  const signIn = async ({ email, password }) => {
    try {
      const {
        data: { token }
      } = await login(email, password);
      let theRole = decode(token);
      console.log(theRole.role);
      setRole(theRole.role);
      setIsAuthenticated(true);

      if (token) {
        history.push("/");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const signUp = async ({ user_type, name, surname, email, password, phone, birth_date, document_type, document_number }) => {
    try {
      const {
        data: { token }
      } = await register({ user_type, name, surname, email, password, phone, birth_date, document_type, document_number });
      let theRole = decode(token);
      setRole(theRole.role);
      setIsAuthenticated(true);
      if (token) {
        history.push("/");
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, signIn, role, setRole, signUp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
