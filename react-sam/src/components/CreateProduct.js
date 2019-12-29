import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { createProductCo } from '../http/ProductService';
import { useAuth } from '../shared/context/auth-context';
import axios from 'axios';

export function CreateProduct() {

  const [file, setFile] = useState();
  const [datos, setDatos] = useState();

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
        "content-type": "multipart/form-data"
      }
    };
    return createProductCo(formData, config);
  };

  return (
    // <form className="create" onSubmit={handleSubmit(handleCreate)} name='createProduct' enctype="multipart/form-data">
    <form onSubmit={handleFormSubmit} className='form-create-product' id='createProduct' name='createProduct'>
      <fieldset>
        <label>Nombre</label>
        <input type="text" name="name" id='name' />
      </fieldset>
      <fieldset>
        <label>Descripción</label>
        <textarea
          name="description"
          id='description'
          cols="30"
          rows="10"
          placeholder="Descripción..."
        ></textarea>
      </fieldset>
      <fieldset>
        <label>Categoría</label>
        <select name="category" id="category">
          <option value="">Seleccionar</option>
          <option value="admin">Administración</option>
          <option value="desing">Diseño</option>
          <option value="developer">Desarrollo</option>
        </select>
      </fieldset>
      <fieldset>
        <label>Imagen</label>
        {/* <input type="file" onChange={handleChange} name="img" id='img' ref={register({})} /> */}
        <input type="file" name='photo' id='photo' />
      </fieldset>
      <fieldset>
        <label>Precio inicial</label>
        <input type="number" name="init_price" id='init_price' placeholder='€' />
      </fieldset>
      <fieldset>
        <label>Descuento</label>
        <input type="number" name="discount" id='discount' placeholder='%' />
      </fieldset>
      <fieldset>
        <label>Precio final</label>
        <input type="number" name="final_price" id='final_price' placeholder='€' />
      </fieldset>
      <button type="submit" value='submit' id='sendProdcut'>Publicar</button>
    </form >
  )
}
