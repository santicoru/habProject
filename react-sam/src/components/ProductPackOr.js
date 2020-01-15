import React, { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import { getCodePack } from '../http/packService';
import { updateProductPack } from '../http/packService';
import { EDITPRODUCT_VALIDATIONS } from '../shared/validations';

export function ProductPackOr({ defaultProductPack = {} }) {
  console.log(defaultProductPack);
  const [productPack, setProductPack] = useState(defaultProductPack);
  const [productsInPack, setProductsInPack] = useState();
  const { register, handleSubmit, setError } = useForm({
    mode: "onBlur"
  });


  useEffect(() => {
    const getCode = defaultProductPack.code_package;
    console.log(getCode);
    return getCodePack({ getCode }).then(response => {
      setProductsInPack(response.data.data);
    });
  }, []);

  console.log(productsInPack);

  const handleUpdate = formData => {
    console.log(formData);
    const idProductPack = productPack.id;
    console.log(idProductPack);
    return updateProductPack(idProductPack, formData)
      .then(response => alert(response.data))
      .catch(error => {
        setError(error);
      });
  };

  return (
    <div className='product-co' id='edit-prod-pack'>
      <section className='productData'>
        {productsInPack !== undefined && (
          <div>
            <h2>
              Productos ofertados con código:
              <span className='code'>{defaultProductPack.code_package}</span>
            </h2>
            <ul>
              {productsInPack.map(productIP => (
                <li key={productIP.id}>
                  <div>
                    <img src={productIP.photo} alt='productimage' />
                    <p>{productIP.name}</p>
                    <p>Precio catalogo: {productIP.old_price}€</p>
                    <p>Descuento Adicional {productIP.discount} %</p>
                    <p>Precio ofertado: {productIP.final_price}€</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <form onSubmit={handleSubmit(handleUpdate)} className='editForm'>
        <div className='group1'>
          <p>Fecha fin actual: {(defaultProductPack.date_end).substring(0, 10)}</p>
          <label>Modifica la fecha de fin:</label>
          <input
            type='date'
            name='date_end'
            ref={register(EDITPRODUCT_VALIDATIONS.init_price)}
          />
        </div>
        <button type='submit' className='send-btn'>
          Guardar cambios
        </button>
      </form>

    </div>
  );
}
