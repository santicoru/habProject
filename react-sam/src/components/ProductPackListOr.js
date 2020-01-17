import React, { useState } from 'react';
import { getCodePack } from '../http/packService';
function Loading() {
  return <div>Loading...</div>;
}

export function ProductPackListOr({ productsPack, selectedIndex, onProductSelectedPack }) {
  const [idPack, setIdPack] = useState();
  const [productsInPack, setProductsInPack] = useState();

  if (productsPack === undefined) return <Loading />;

  if (productsPack === null) {
    return <div>Error</div>;
  }

  const now = new Date();
  const today = now.toISOString().substring(0, 10);

  return (
    <div className='list-products-co'>
      {productsPack.length === 0 && (
        <h3 className='code-list'>Todavía no hay paquetes publicados</h3>
      )}
      {productsPack.length > 0 && (
        <h3 className='code-list'>Selecciona para mas información</h3>
      )}
      <ul className='product-list'>
        {productsPack.map((productPack, index) => (
          <li
            key={productPack.id}

          >
            <div className={`product-item ${selectedIndex === index}`}>
              <div>
                <p>Código: {productPack.code_package}</p>
                <p>Creado el: {(productPack.date_begin).substring(0, 10)}</p>
                {((productPack.date_end).substring(0, 10) > today || (productPack.date_end).substring(0, 10) === today) && (
                  <p>Valido hasta: {(productPack.date_end).substring(0, 10)}</p>
                )}
                {(productPack.date_end).substring(0, 10) < today && (
                  <p>Caducado</p>
                )}
              </div>
              <button onClick={() => {
                onProductSelectedPack(productsPack[index]);
                setIdPack(productsPack[index].id);
                const getCode = productPack.code_package;
                console.log(getCode);
                return getCodePack({ getCode }).then(response => {
                  setProductsInPack(response.data.data);
                });
              }}>
                Ver productos de paquete
                </button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        {productsInPack !== undefined && (
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
        )}
      </div>
    </div >
  );
}