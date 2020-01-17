import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import discount from '../assets/images/BANNER-DESCUENTO.svg';
import { useHistory } from 'react-router';

export function Homepage() {
  const history = useHistory();

  return (
    <React.Fragment>
      <Header />
      <main>
        <h1 className='top'>Software A Medida</h1>
        <div>
          <button
            onClick={() => history.push('/code')}
          >¿Tienes un código?
          </button>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}
