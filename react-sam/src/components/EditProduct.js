import React from 'react';

export function EditProduct() {

  return (
    <section className="editProduct">
      <h1> Editar produducto </h1>
      <button className="showAllForEdit">Mostrar todos los productos</button>
      <label for="search">Buscar</label>
      <input type="search" name="search" placeholder="Nombre del producto" />
      <button className="search">Buscar</button>
      <ul className="listProduct">
      </ul>
    </section>
  )
}