import React, { useState, useEffect } from 'react';
import { getOrder } from '../http/orderFinal';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function OrderHistory() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getOrder()
      .then(response => setProducts(response.data));
  }, []);

  const onProductSelected = (product) => {
    console.log(product);
    console.log(product.id)
  }
  return (
    <React.Fragment>
      <Header />
      <div className='products-order-history'>
        <h1> Mis pedidos</h1>
        <ul>
          {products.map((product, index) => (
            <li
              key={product.id}
            >
              <div className='product-order'>
                <img src={product.photo} />
                <p>{product.name}</p>
              </div>
              <button onClick={() => onProductSelected(product)}>VALORAR EL PRODUCTO</button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </React.Fragment>
  )
}