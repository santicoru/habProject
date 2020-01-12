import React, { useEffect } from 'react';
import { useCart } from '../shared/context/cart-context';
import { useHistory } from 'react-router';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { usePack } from '../shared/context/package-context';
import { useAuth } from '../shared/context/auth-context';

function Confirmation() {
  const { resetCart } = useCart();
  const {
    pack,
    totalPrice,
    totalItems,
    removeItem,
    resetPack,
    code,
    setCode
  } = usePack();
  const { role } = useAuth();

  const history = useHistory();

  useEffect(() => {
    resetCart();
    resetPack();
  }, []);

  const goCatalogue = () => history.push('/catalogue');

  return (
    <React.Fragment>
      <Header />
      {role === 'organizer' && (
        <p>CODIGO GENERADO: {code}</p>
      )}
      <p>GRACIAS POR COMPRAR EN SAM</p>
      <button onClick={goCatalogue}>Seguir comprando</button>
      <Footer />
    </React.Fragment>
  )
}

export { Confirmation };
