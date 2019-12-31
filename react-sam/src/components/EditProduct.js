import React, { useEffect, useState } from 'react';
import { getProductCo } from '../http/ProductService';
import axios from 'axios';

export function EditProduct() {

  const [products, setProducts] = useState(['hola']);


  useEffect(() => {
    getProductCo()
      .then(response => {
        console.log(response);
        setProducts(response)
        console.log(products);
      })
  }, []);

  // useEffect(() => {
  //   getProductCo()
  //     .then(products => {
  //       setProducts(products)
  //       console.log(products);
  //     });
  // }, []);


  return (
    <section className="editProduct">
      <h1> Editar produducto </h1>
      <button className="showAllForEdit">Mostrar todos los productos</button>
      <label>Buscar</label>
      <input type="search" name="search" placeholder="Nombre del producto" />
      <button className="search">Buscar</button>
      <ul className="listProduct" >
      </ul>
    </section>
  )
}