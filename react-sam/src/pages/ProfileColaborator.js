import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAuth } from '../shared/context/auth-context';

export function ProfileColaborator() {

  const { logout } = useAuth();

  return (
    <React.Fragment>
      <Header />
      <ul>
        <li>MODIFICAR CONTRASEÑA</li>
        <li><Link to='/productCo'>GESTIONAR MIS PRODUCTOS</Link></li>
        <li onClick={logout}><Link to='/catalogue'>CERRAR SESIÓN</Link></li>
        <li>ELIMINAR CUENTA</li>
      </ul>
      <Footer />
    </React.Fragment>
  )
}