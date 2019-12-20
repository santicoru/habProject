import React from 'react';
import { createProductCo } from '../http';

export function CreateProduct() {

  const createP = async ({ name, description, category, image, initPrice, discount, finalPrice }) => {
    try {
      await createProductCo
    } catch (error) {
      return Promise.reject(error);
    }
  }
  return (
    <form className="create" enctype="multipart/form-data">
      <fieldset>
        <label for="name">Nombre</label>
        <input type="text" name="name" />
      </fieldset>
      <fieldset>
        <label for="description">Descripción</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Descripción..."
        ></textarea>
      </fieldset>
      <fieldset>
        <label for="category">Categoría</label>
        <select name="category" id="category">
          <option value="">Seleccionar</option>
          <option value="admin">Administración</option>
          <option value="desing">Diseño</option>
          <option value="developer">Desarrollo</option>
        </select>
      </fieldset>
      <fieldset>
        <label for="image">Imagen</label>
        <input type="file" name="image" />
      </fieldset>
      <fieldset>
        <label for="initPrice">Precio inicial</label>
        <input type="number" name="initPrice" placeholder='€' />
      </fieldset>
      <fieldset>
        <label for="discount">Descuento</label>
        <input type="number" name="discount" placeholder='%' />
      </fieldset>
      <fieldset>
        <label for="finalPrice">Precio final</label>
        <input type="number" name="finalPrice" placeholder='€' />
      </fieldset>
      <button type="submit">Publicar</button>
    </form>
  )
}