import React, { useEffect } from 'react';
import { useCart } from '../shared/context/cart-context';
import { useHistory } from 'react-router';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Confirmation() {
  const { resetCart } = useCart();
  const history = useHistory();
  useEffect(() => {
    resetCart();
  }, []);

  const goCatalogue = () => history.push('/catalogue');

  return (
    <React.Fragment>
      <Header />
      <p>GRACIAS POR COMPRAR EN SAM</p>
      <button onClick={goCatalogue}>Seguir comprando</button>
      <Footer />
    </React.Fragment>
  )
}

export { Confirmation };
