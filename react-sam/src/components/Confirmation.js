import React, { useEffect } from 'react';
import { useCart } from '../shared/context/cart-context';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Confirmation() {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, [resetCart]);

  return (
    <React.Fragment>
      <Header />
      <p>GRACIAS POR COMPRAR EN SAM</p>;
   <Footer />
    </React.Fragment>
  )
}

export { Confirmation };
