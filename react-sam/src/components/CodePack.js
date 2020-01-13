import React, { useState } from 'react';
import { getCodePack } from '../http/packService';
import { useCart } from '../shared/context/cart-context';

export function CodePack() {
  const [getCode, setGetCode] = useState();
  const [productsInPack, setProductsInPack] = useState();
  const { addItemToCart } = useCart();

  const showPack = (e) => {
    e.preventDefault();
    setProductsInPack(undefined);
    console.log(getCode);
    return getCodePack({ getCode }).then(response => {
      setProductsInPack(response.data);
    });
  }

  console.log(productsInPack);

  const showProducts = () => {
    if (productsInPack !== undefined && productsInPack.length > 0) {
      return (
        <ul>
          {productsInPack.map(productIP => (
            <li key={productIP.id}>
              <div>
                <img src={productIP.photo} alt='productimage' />
                <p>{productIP.name}</p>
                <p>Precio catalogo: {productIP.old_price}€</p>
                <p>con descuento adicional del {productIP.discount} %</p>
                <p>Adquierelo al precio especial de: {productIP.final_price}€</p>
                <button onClick={() => addItemToCart(productIP)}>Lo quiero</button>
              </div>
            </li>
          ))}
        </ul>
      )
    }
  }
  return (
    <React.Fragment>
      <form onSubmit={showPack}
        className='form-code-pack'
        id='show-code-pack'
      >
        <label>¿Tienes un código promocional?</label>
        <input
          type='text'
          name='codePack'
          id='codePack'
          placeholder='introduce aqui tu código'
          onChange={(e) => setGetCode(e.target.value)} />
        <button
          type='submit'
          id='button-code'
        >
          Ver
        </button>
      </form>
      <div>{showProducts()}</div>
    </React.Fragment>
  );
}