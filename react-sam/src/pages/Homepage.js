import React from 'react';
import logo from '../assets/images/SAMlogotipo.png';

export function Homepage() {
  return (
    <React.Fragment>
      <main className='main-homepage'>
        <section className='photo-back'>
          <img src={logo} className='logo-homepage' alt='foto fondo' />
          <h1>Software A Medida</h1>
        </section>
      </main>
    </React.Fragment>
  )
}