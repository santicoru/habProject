import React from 'react';
import { useHistory } from 'react-router';
import { useCart } from '../shared/context/cart-context';
import { Link } from 'react-router-dom';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function ShoppingCart() {
  const {
    cart,
    totalPrice,
    totalItems,
    removeItemFromCart,
    addItemToCart,
    removeItem
  } = useCart();
  const history = useHistory();

  return (
    <React.Fragment>
      <Header />
      <ul>
        {cart.map(item => (
          <li>
            <p>
              <Link to={`/catalogueProduct/${item.id}`}>{item.name}</Link>
              <span>{` ${item.final_price}€ - `}</span>
              <span>{` x ${item.quantity} - `}</span>
              <button
                onClick={e => {
                  e.preventDefault();
                  addItemToCart(item);
                }}
              >
                +
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  removeItemFromCart(item);
                }}
              >
                -
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  removeItem(item.id);
                }}
              >
                Remove
              </button>
            </p>
          </li>
        ))}
      </ul>
      <p>Total price = {`${totalPrice}€`}</p>
      {totalItems > 0 && (
        <button onClick={() => history.push("/confirmation")}>Comprar</button>
      )}
      <Footer />
    </React.Fragment>
  );
}

export { ShoppingCart };