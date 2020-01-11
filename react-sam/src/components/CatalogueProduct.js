import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useCart } from '../shared/context/cart-context';
import { getCatalogueProduct } from '../http/CatalogueService';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function CatalogueProduct() {
  const [product, setProduct] = useState();
  const [rate, setRate] = useState([]);
  const params = useParams();
  const history = useHistory();
  const { addItemToCart } = useCart();

  useEffect(() => {
    getCatalogueProduct(params.productId)
      .then(response => setProduct(response.data));
  }, [params.producId]);
  
  console.log(product);
  if (!product) return null;

  const rateOfTheProduct = () => {
    let total = 0;
    let num = 0;
    for (let rate in product) {
      total += product[rate].value_in_rate;
      num += 1;
    }
    const result = total / num;
    return result;
  }

  const showRate = () => {
    const rat = [];
    for (let rate in product) {
      console.log(product[rate].date_comment);
      console.log((product[rate].date_comment).substring(0, 10));

      let r = { value: product[rate].value_in_rate, date: (product[rate].date_comment).substring(0, 10), comment: product[rate].comment_in_rate }
      rat.push(r);
    }
    setRate(rat);
  }

  const showRates = () => {
    return (
      <ul>
        {rate.map(r => (
          <li>
            <div>
              <p>Puntuación: {r.value}</p>
              <p>Fecha de comentario: {r.date}</p>
              <p>Comentario: {r.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  console.log(rate);

  return (
    <React.Fragment>
      <Header />
      <div>
        <div>
          <img src={product[0].photo} />
          <p>{product[0].name}</p>
          <p>Valoración media: {rateOfTheProduct()}  <button onClick={showRate}>Ver valoraciones</button></p>
          <p>{product[0].description}</p>
          <p>
            <span className="iprice">{`${product[0].init_price}€ `}</span>
            ...<span className="dis">{` -${product[0].discount}% `}</span>
            ...<span className="fprice">{` ${product[0].final_price}€`}</span>
          </p>
        </div>
        <div>{showRates()}</div>
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