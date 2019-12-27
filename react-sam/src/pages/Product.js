import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../shared/context/auth-context';
import { CreateProduct } from '../components/CreateProduct';
import { EditProduct } from '../components/EditProduct';

export function Product() {

  const [show, setShow] = useState();

  const choice = () => {

  }
  return (
    <section className='product-co'>
      <h1>Gestionar mis productos</h1>
      <section className='select-product'>
        <button className='bto-product' onClick={choice} >CREAR PRODUCTO</button>
        <button className='bto-product' onClick={choice} >EDITAR PRODUCTO</button>
      </section>
      <section className='selection-po'>
        <CreateProduct />
        <EditProduct />
      </section>
    </section>
  )
}