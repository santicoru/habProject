import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { usePack } from '../shared/context/package-context';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { createPack } from '../http/packService';

export function CreatePack() {
  const [expireDate, setExpireDate] = useState();
  const {
    pack,
    totalPrice,
    totalItems,
    removeItem,
    code,
    setCode
  } = usePack();

  console.log(pack);
  const history = useHistory();

  const expDate = (e) => {
    setExpireDate(e.target.value);
  }
  console.log(expireDate);

  const buy = () => {
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
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <Header />
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
                  removeItem(item.id);
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
      <p>Total price = {`${totalPrice}€`}</p>
      {totalItems > 0 && (
        <button onClick={buy}>GENERAR PAQUETE</button>
      )}
      {code.length > 0 && (
        <p>Codigo: {code}</p>
      )}
      <Footer />
    </React.Fragment>
  );
}
