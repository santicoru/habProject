import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../shared/context/auth-context';
import { CreateProduct } from '../components/CreateProduct';
import { EditProduct } from '../components/EditProduct';

export function Product() {

  const [showCreate, setShowCreate] = useState();
  const [showEdit, setShowEdit] = useState();

  const choiceCreate = () => {
    setShowEdit('');
    setShowCreate(<CreateProduct />);
  }

  const choiceEdit = () => {
    setShowCreate('');
    setShowEdit(<EditProduct />);
  }
  return (
    <section className='product-co'>
      <h1>Gestionar mis productos</h1>
      <section className='select-product'>
        <button className='bto-product1' onClick={choiceCreate} >CREAR PRODUCTO</button>
        <button className='bto-product' onClick={choiceEdit} >EDITAR PRODUCTO</button>
      </section>
      <section className='selection-po'>
        <div>{showCreate}</div>
        <div>{showEdit}</div>
      </section>
    </section>
  )
}