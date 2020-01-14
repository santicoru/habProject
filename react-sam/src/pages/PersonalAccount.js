import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAuth } from '../shared/context/auth-context';
import { useHistory } from 'react-router-dom';
import { deleteAccount } from '../http/authService';

export function PersonalAccount() {
  const { logout, role } = useAuth();
  const history = useHistory();

  const out = () => {
    logout();
    history.push('/');
  };

  const delAccount = () => {
    const reply = prompt(
      'esta seguro de que quiere eliminar la cuenta ? (y / Y)'
    );
    if (reply === 'y' || reply === 'Y') {
      deleteAccount();
      history.push('/catalogue');
    }
  };

  return (
    <React.Fragment>
      <Header />
      <div className='title-personalAccount'>
        <h1>Mi Cuenta</h1>
      </div>
      <section className='main-personalAccount'>
        <ul>
          <li>MODIFICAR CONTRASEÑA</li>
          {role === 'colaborator' && (
            <li>
              <Link to='/productCo'>GESTIONAR MIS PRODUCTOS</Link>
            </li>
          )}
          {role === 'organizer' && (
            <li>
              <Link to='/packOr'>GESTIONAR MIS PAQUETES</Link>
            </li>
          )}
          <li>
            <Link to='/ordersHistory'>VER HISTORIAL DE PEDIDOS</Link>
          </li>
          <li onClick={out}>CERRAR SESIÓN</li>
          <li onClick={delAccount}>ELIMINAR CUENTA</li>
        </ul>
      </section>
      <Footer />
    </React.Fragment>
  );
}
