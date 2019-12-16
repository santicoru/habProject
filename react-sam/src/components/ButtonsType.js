import React from 'react';

export function ButtonsType({ onTypeChange }) {
  return (
    <section className="election">
      <button className="colaborator" onClick={() => { onTypeChange('colaborator') }}>COLABORADOR</button>
      <button className="organizer" onClick={() => onTypeChange('organizer')}>ORGANIZADOR</button>
      <button className="buyer" onClick={() => onTypeChange('buyer')}>COMPRADOR</button>
    </section>
  )
}