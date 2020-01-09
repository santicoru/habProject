import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useCart } from '../shared/context/cart-context';
import { getCatalogueProduct } from '../http/CatalogueService';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function CatalogueProduct() {
  const [product, setProduct] = useState();
  const params = useParams();
  const history = useHistory();
  const { addItemToCart } = useCart();

  useEffect(() => {
    getCatalogueProduct(params.productId)
      .then(response => setProduct(response.data[0]));
  }, [params.productId]);
  console.log(product);
  if (!product) return null;

  return (
    <React.Fragment>
      <Header />
      <div>
        <div>
          <img src={product.photo} />
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>
            <span className="iprice">{`${product.init_price}€ `}</span>
            ......<span className="dis">{` -${product.discount}% `}</span>
            <span className="fprice">{` ${product.final_price}€`}</span>
          </p>
        </div>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            history.goBack();
          }}
        >
          Back
      </a>
        <button onClick={() => addItemToCart(product)}>Add to cart</button>
      </div>
      <Footer />
    </React.Fragment>
  );
}