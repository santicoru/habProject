import React from 'react';
import { createProductCo } from '../http/ProductService';

export function CreateProduct() {
  const handleFormSubmit = e => {
    e.preventDefault();
    createP().then(response => {
      console.log(response.data);
    });
  };

  const createP = () => {
    const cProduct = document.getElementById('createProduct');
    const formData = new FormData(cProduct);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    return createProductCo(formData, config);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className='form-create-product'
      id='createProduct'
      name='createProduct'
    >
      <h2>Crear producto</h2>
      <div className='group1'>
        <input type='text' name='name' id='name' required />
        <span class='bar'></span>
        <label>Nombre</label>
      </div>
      <div className='group1'>
        <textarea
          name='description'
          id='description'
          cols='30'
          rows='2'
          required
        ></textarea>
        <span class='bar'></span>
        <label>Descripción</label>
      </div>
      <div className='group2'>
        Categoría
        <select name='category' id='category' required>
          <option value=''>Seleccionar</option>
          <option value='admin'>Administración</option>
          <option value='desing'>Diseño</option>
          <option value='developer'>Desarrollo</option>
        </select>
      </div>
      <div className='group2'>
        Imagen
        <input type='file' name='photo' id='photo' />
      </div>
      <div className='group1'>
        <input type='number' name='init_price' id='init_price' required />
        <span class='bar'></span>
        <label>Precio inicial</label>
      </div>
      <div className='group1'>
        <input type='number' name='discount' id='discount' required />
        <span class='bar'></span>
        <label>Descuento</label>
      </div>
      <div className='group1'>
        <input type='number' name='final_price' id='final_price' required />
        <span className='bar'></span>
        <label>Precio final</label>
      </div>
      <button
        type='submit'
        value='submit'
        id='sendProdcut'
        className='send-btn'
      >
        Publicar
      </button>
    </form>
  );
}
