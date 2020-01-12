import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { updateProduct } from '../http/ProductService';
import { EDITPRODUCT_VALIDATIONS } from '../shared/validations';

export function ProductCo({ defaultProduct = {}, onDeleteProduct }) {
  console.log(defaultProduct);
  const [product, setProduct] = useState(defaultProduct);

  const { register, handleSubmit, setError } = useForm({
    mode: "onBlur"
  });

  const handleUpdate = formData => {
    console.log(formData);
    const idProduct = product.id;
    console.log(idProduct);
    return updateProduct(idProduct, formData).catch(error => {
      setError(error);
    })
  };

  return (
    <div className='product-co'>
      <p>Nombre: {defaultProduct.name}</p>
      <p>Descripción: {defaultProduct.description}</p>
      <p>Categoría: {defaultProduct.category}</p>
      <img src={defaultProduct.photo} alt='imagen producto' />
      <form onSubmit={handleSubmit(handleUpdate)}>
        <label>Precio inical: </label>
        <input type='number' name='init_price' placeholder={defaultProduct.init_price} ref={register(EDITPRODUCT_VALIDATIONS.init_price)} />
        <label>Descuento: </label>
        <input type='number' name='discount' placeholder={defaultProduct.discount} ref={register(EDITPRODUCT_VALIDATIONS.discount)} />
        <label>Precio venta: </label>
        <input type='number' name='final_price' placeholder={defaultProduct.final_price} ref={register(EDITPRODUCT_VALIDATIONS.final_price)} />
        <button type="submit">
          Guardar cambios
        </button>
      </form>
      <div>
        <button onClick={e => { e.preventDefault(); onDeleteProduct(product.id) }}>
          <a href='/'></a>Borrar
        </button>
      </div>
    </div >
  )
}