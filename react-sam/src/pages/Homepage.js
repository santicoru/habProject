import React from 'react';
import logo from '../assets/images/SAMlogotipo.png';
import { Header } from '../components/Header';

export function Homepage() {
  return (
    <React.Fragment>
      <Header />
      <main className='main-homepage'>
        <section className='photo-back'>
          <img src={logo} className='logo-homepage' alt='foto fondo' />
          <h1>Software A Medida</h1>
        </section>
      </main>
    </React.Fragment>
  )
}