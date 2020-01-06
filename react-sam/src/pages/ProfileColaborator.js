import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './Product';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function ProfileColaborator() {

  return (
    <React.Fragment>
      <Header />
      <ul>
        <li>MODIFICAR CONTRASEÑA</li>
        <li><Link to='/productCo'>GESTIONAR MIS PRODUCTOS</Link></li>
        <li>CERRAR SESIÓN</li>
        <li>ELIMINAR CUENTA</li>
      </ul>
      <Footer />
    </React.Fragment>
  )
}