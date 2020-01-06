import React, { useState, useEffect } from "react";
import { getCatalogue } from '../http/CatalogueService';
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Catalogue() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCatalogue()
      .then(response => setProducts(response.data));
    console.log(products);
  }, []);

  return (
    <React.Fragment>
      <Header />
      <ul>
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
      </ul>
      <Footer />
    </React.Fragment>
  );
}

export { Catalogue };
