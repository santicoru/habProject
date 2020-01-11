import React, { useState, useEffect } from "react";
import { getCatalogue, getCatalogueProductFiltered } from '../http/CatalogueService';
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Catalogue() {
  const [products, setProducts] = useState([]);
  const [productsFilter, setProductFilter] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    getCatalogue()
      .then(response => setProducts(response.data));
    console.log(products);
  }, []);

  const catalogueFilters = (e) => {
    e.preventDefault();
    setShow(true);
    getCatalogueProductFiltered(productsFilter)
      .then(response => setProducts(response.data));
    console.log(products);

    console.log(productsFilter);
    console.log(products);
  }

  const minP = (e) => setProductFilter({ ...productsFilter, minPrice: e.target.value });
  const maxP = (e) => setProductFilter({ ...productsFilter, maxPrice: e.target.value });
  const selC = (e) => setProductFilter({ ...productsFilter, category: e.target.value });

  const showP = () => {
    return (<ul>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/catalogueProduct/${product.id}`}>
            <img src={product.photo} />
          </Link>
          <div>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>
              <span className="iprice">{`${product.init_price}€ `}</span>
              <span className="dis">{` -${product.discount}% `}</span>
              <span className="fprice">{` ${product.final_price}€`}</span>
            </p>
          </div>
        </li>
      ))}
    </ul>)
  }
  return (
    <React.Fragment>
      <Header />
      <form onSubmit={catalogueFilters} className='form-catalogue-filters' id='form-catalogue-filters'>
        <fieldset>
          <label for='price'>Rango de precios: </label>
          <input type='number' name='price' id='priceMin' placeholder='min' onChange={minP} />
          <input type='number' name='price' id='priceMax' placeholder='max' onChange={maxP} />
        </fieldset>
        <fieldset>
          <label>Categoría</label>
          <select name="category" id="category" onChange={selC}>
            <option value="">Seleccionar</option>
            <option value="admin">Administración</option>
            <option value="desing">Diseño</option>
            <option value="developer">Desarrollo</option>
          </select>
        </fieldset>
        <button type='submit' id='buttonFilters'>Buscar</button>
      </form>
      {show === false && (
        showP()
      )}
      {show === true && (
        showP()
      )}
      <Footer />
    </React.Fragment>
  );
}

export { Catalogue };
