import React from 'react';
import { useHistory } from 'react-router';
import { useCart } from '../shared/context/cart-context';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAuth } from '../shared/context/auth-context';
import { orderF } from '../http/orderFinal';
import { trash } from '../assets/images/trash.png';

export function ShoppingCart() {
  const { role } = useAuth();
  const {
    cart,
    totalPrice,
    totalItems,
    removeItemFromCart,
    addItemToCart,
    removeItem
  } = useCart();

  const history = useHistory();

  const buy = () => {
    if (role) {
      const order = localStorage.getItem('cart');
      console.log(order);
      const price_final = totalPrice;
      console.log(price_final);
      const orderFinal = { order, price_final };
      console.log(orderFinal);
      history.push('/confirmation');
      return orderF({ orderFinal }).catch(error => {
        console.log(error);
      });
    } else {
      history.push('/login');
    }
  };
  return (
    <React.Fragment>
      <Header />
      <section className='cart-main'>
        <div className='title'>
          <h2>Artículos en el carrito</h2>
        </div>
        <section className='cart-detail'>
          {totalItems === 0 && <h2>Carrito vacio</h2>}
          {totalItems > 0 && (
            <React.Fragment>
              <ul>
                {cart.map(item => (
                  <li>
                    <p>
                      <Link to={`/catalogueProduct/${item.id}`}>
                        {item.name}
                      </Link>
                      <span>{` ${item.final_price} €  `}</span>
                      <span>{`- x ${item.quantity} - `}</span>
                      <button
                        className='plus'
                        onClick={e => {
                          e.preventDefault();
                          addItemToCart(item);
                        }}
                      >
                        +
                      </button>
                      <button
                        className='minus'
                        onClick={e => {
                          e.preventDefault();
                          removeItemFromCart(item);
                        }}
                      >
                        -
                      </button>
                      <button
                        className='trash'
                        onClick={e => {
                          e.preventDefault();
                          removeItem(item.id);
                        }}
                      ></button>
                    </p>
                  </li>
                ))}
              </ul>
              <div className='total-price'>
                <p>Total = {`${totalPrice}€`}</p>
              </div>
              <button className='send-btn' id='buy-btn' onClick={buy}>
                Comprar
              </button>
            </React.Fragment>
          )}
        </section>
        <section className='cart-btn'>
          <Link to='/catalogue'>
            <button className='continue'>Seguir comprando</button>
          </Link>
        </section>
      </section>

      <Footer />
    </React.Fragment>
  );
}
