import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './Product';

export function ProfileColaborator() {

  return (
    <ul>
      <li>MODIFICAR CONTRASEÑA</li>
      <li><Link to='/product'>GESTIONAR MIS PRODUCTOS</Link></li>
      <li>CERRAR SESIÓN</li>
      <li>ELIMINAR CUENTA</li>
    </ul>
  )
}