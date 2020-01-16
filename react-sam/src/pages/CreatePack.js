import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { usePack } from '../shared/context/package-context';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { createPack } from '../http/packService';

export function CreatePack() {
  const [expireDate, setExpireDate] = useState();
  const [error, setError] = useState(false);
  const {
    pack,
    totalPrice,
    totalItems,
    removeItem,
    code,
    setCode,
    resetPack
  } = usePack();

  console.log(pack);
  const history = useHistory();

  const expDate = (e) => {
    setExpireDate(e.target.value);
  }
  console.log(expireDate);

  const buy = () => {
    if (expireDate !== undefined) {
      const order = (localStorage.getItem('pack'));
      console.log(order);
      const date_end = expireDate;
      console.log(date_end);
      const createP = { order, date_end };
      console.log(createP);
      history.push('/confirmation');
      return createPack({ createP })
        .then(response => {
          console.log(response.data);
          setCode(response.data);
        })
        .then(resetPack())
        .then(window.location.reload())
        .catch(error => {
          console.log(error);
          setError(false);
        });
    } else {
      setError(true);
    }

  }

  return (
    <React.Fragment>
      <Header />
      <main className='top'>
        {totalItems === 0 && (
          <React.Fragment>
            <h2>No hay productos seleccionados</h2>
          </React.Fragment>
        )}
        {totalItems > 0 && (
          <React.Fragment>
            <h1>Precios especiales:</h1>
            <ul>
              {pack.map(item => (
                <li key={item.id}>
                  <p>
                    <span>{item.name}</span>
                    <span>{` ${item.oldPrice}€ `}</span>
                    <span>{`- ${item.discount}% `}</span>
                    <span>{`-> ${item.newPrice}€  `}</span>

                    <button
                      onClick={e => {
                        e.preventDefault();
                        removeItem(item);
                      }}
                    >
                      Quitar
              </button>
                  </p>
                </li>
              ))}
            </ul>
            <label>Paquete valido hasta: </label>
            <input type='date' name='expirationDate' onChange={expDate} required />
            {error && (
              <p>Debe introducir una fecha de validez</p>
            )}
            <p>Total price = {`${totalPrice}€`}</p>
            <button onClick={buy}>GENERAR PAQUETE</button>
          </React.Fragment>
        )}
        {code.length > 0 && (
          <p>Codigo: {code}</p>
        )}
        <Link to="/catalogue"><button>Volver al catalogo</button></Link>
      </main>
      <Footer />
    </React.Fragment>
  );
}
