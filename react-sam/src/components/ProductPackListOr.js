import React, { useState } from 'react';
import { getCodePack } from '../http/packService';
function Loading() {
  return <div>Loading...</div>;
}

export function ProductPackListOr({ productsPack, selectedIndex, onProductSelectedPack }) {
  const [idPack, setIdPack] = useState();
  if (productsPack === undefined) return <Loading />;

  if (productsPack === null) {
    return <div>Error</div>;
  }

  const now = new Date();
  const today = now.toISOString().substring(0, 10);

  return (
    <div className='list-products-co'>
      <h2>Paquetes publicados</h2>
      <h3>Selecciona para mas información</h3>
      <ul className='product-list'>
        {productsPack.map((productPack, index) => (
          <li
            key={productPack.id}
            onClick={() => {
              onProductSelectedPack(productsPack[index]);
              setIdPack(productsPack[index].id);
            }}
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}