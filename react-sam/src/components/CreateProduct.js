import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { createProductCo } from '../http';
import { useAuth } from '../shared/context/auth-context';
import axios from 'axios';

export function CreateProduct() {

  const [file, setFile] = useState({});
  const [datos, setDatos] = useState();

  const { register, formState, handleSubmit } = useForm({ mode: 'onBlur' });


  const createP = async (formData) => {
    const {
      name, description, category, init_price, discount, final_price, img
    } = formData;
    setFile(img[0]);
    console.log(file);

    try {
      const { data } = await createProductCo({ name, description, category, file, init_price, discount, final_price });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  const handleCreate = formData => {
    console.log(formData);
    return createP(formData);
  }

  // const [file, setFile] = useState();

  // const handleFormSubmit = e => {
  //   e.preventDefault(); // Stop form submit
  //   fileUpload(file).then(response => {
  //     console.log(response.data);
  //   });
  // };

  // const handleChange = e => {
  //   setFile({ file: e.target.files[0] });
  //   console.log(file);
  // };

  // const fileUpload = file => {
  //   const url = `${process.env.REACT_APP_BACKEND_URL}/api/product`;
  //   const formData = new FormData();
  //   console.log(file);
  //   formData.append("file", file);
  //   console.log(formData);
  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data"
  //     }
  //   };
  //   return axios.post(url, formData, config);
  // };

  return (
    <form className="create" onSubmit={handleSubmit(handleCreate)} name='createProduct'>
      {/* <form onSubmit={handleFormSubmit}> */}
      <fieldset>
        <label>Nombre</label>
        <input type="text" name="name" id='name' ref={register({})} />
      </fieldset>
      <fieldset>
        <label>Descripción</label>
        <textarea
          name="description"
          id='description'
          cols="30"
          rows="10"
          placeholder="Descripción..."
          ref={register({})}
        ></textarea>
      </fieldset>
      <fieldset>
        <label>Categoría</label>
        <select name="category" id="category" ref={register({})}>
          <option value="">Seleccionar</option>
          <option value="admin">Administración</option>
          <option value="desing">Diseño</option>
          <option value="developer">Desarrollo</option>
        </select>
      </fieldset>
      <fieldset>
        <label>Imagen</label>
        {/* <input type="file" onChange={handleChange} name="img" id='img' ref={register({})} /> */}
        <input type="file" name="img" id='img' ref={register({})} />
      </fieldset>
      <fieldset>
        <label>Precio inicial</label>
        <input type="number" name="init_price" id='init_price' placeholder='€' ref={register({})} />
      </fieldset>
      <fieldset>
        <label>Descuento</label>
        <input type="number" name="discount" id='discount' placeholder='%' ref={register({})} />
      </fieldset>
      <fieldset>
        <label>Precio final</label>
        <input type="number" name="final_price" id='final_price' placeholder='€' ref={register({})} />
      </fieldset>
      <button type="submit" id='sendProdcut' disabled={formState.isSubmitting}>Publicar</button>
    </form >
  )
}