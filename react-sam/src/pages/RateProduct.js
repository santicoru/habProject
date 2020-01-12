import React, { useState } from 'react';
import useForm from 'react-hook-form';
import { rate } from '../http/rateService';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useParams, useHistory } from 'react-router';

export function RateProduct() {
  const { register, errors, formState, handleSubmit, setError } = useForm({
    mode: 'onBlur'
  });
  const params = useParams();
  const productId = params.productId;

  const handleRate = formData => {
    console.log(formData);
    return rate(formData, productId);
  };

  return (
    <React.Fragment>
      <Header />
      <main className='main-rate'>
        <h1> TU OPINION NOS IMPORTA</h1>
        <form
          onSubmit={handleSubmit(handleRate)}
          name='rate'
          className='form-rate'
        >
          <fieldset>
            <label for='value'>Valoración:</label>
            <select name='value' id='document_type' ref={register({})}>
              <option value=''></option>
              <option value='5'>EXCELENTE</option>
              <option value='4'>MUY BUENO</option>
              <option value='3'>BUENO</option>
              <option value='2'>CUMPLE</option>
              <option value='1'>MALO</option>
            </select>
          </fieldset>
          <fieldset>
            <label for='comment'>Mi opinión:</label>
            <textarea
              name='comment'
              id='comment'
              cols='30'
              rows='10'
              placeholder='mi opinión...'
              ref={register({})}
            ></textarea>
          </fieldset>
          <button type='submit' id='send' disabled={formState.isSubmitting}>
            VALORAR
          </button>
        </form>
      </main>
    </React.Fragment>
  );
}
