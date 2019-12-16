import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../shared/context/auth-context';
import useForm from 'react-hook-form';
import { REGISTER_VALIDATIONS } from "../shared/validations";
import { ButtonsType } from '../components/ButtonsType';

export function Register() {
  const { signUp } = useAuth();

  const { register, errors, formState, handleSubmit, setError } = useForm({ mode: 'onBlur' });

  const handleSignUp = formData => {
    console.log(formData);
    return signUp(formData).catch(error => {
      if (error.response.status === 409) {
        setError(
          "email",
          "conflict",
          "The email already exists. Please try again",
        );
      }
    });
  };

  const [type, setType] = useState('');
  console.log(type);

  const isType = () => {
    if (type.length === 0) {
      return 'Registro';
    }
    if (type === 'colaborator') {
      return 'Registrarse como COLABORADOR';
    }
    if (type === 'organizer') {
      return 'Registrarse como ORGANIZADOR';
    }
    if (type === 'buyer') {
      return 'Registrarse como COMPRADOR';
    }
  }

  return (
    <main className='main-register'>
      <h1>ESCOGE COMO VIVIR TU EXPERIENCIA</h1>
      < ButtonsType onTypeChange={setType} />
      <form onSubmit={handleSubmit(handleSignUp)} name="registry" className='form-register'>
        <h1>{isType()}</h1>
        <select name="user_type" id="user_type" className='hidden' ref={register({})}>
          <option value={type}></option>
        </select>
        <fieldset>
          <label for="name">Nombre / Razón social:</label>
          <input type="text" name="name" ref={register({})} />
        </fieldset>
        <fieldset className='only-buyer'>
          <label for="surname">Apellidos:</label>
          <input type="text" name="surname" />
        </fieldset>
        <fieldset>
          <label for="email">Email:</label>
          <input type="email" name="email" id="email" ref={register(REGISTER_VALIDATIONS.email)} />
          <span>{errors.email && errors.email.message}</span>
        </fieldset>
        <fieldset>
          <label for="password">Contraseña:</label>
          <input type="password" name="password" id="password" ref={register({})} />
        </fieldset>
        <fieldset className='doc'>
          <label for="document_type">Documento:</label>
          <select name="document_type" id="document_type">
            <option value="dni">DNI</option>
            <option value="nie">NIE</option>
            <option value="cif">CIF</option>
          </select>
          <input type="text" name='document_number' id="document_number" />
        </fieldset>
        <fieldset className='only-buyer'>
          <label for="birth_date">Fecha de nacimiento:</label>
          <input type="date" name="birth_date" id="birth_date" />
        </fieldset>
        <fieldset>
          <label for="phone">Teléfono:</label>
          <input type="number" name="phone" id="phone" ref={register({})} />
        </fieldset>
        <button type="submit" id="send" disabled={formState.isSubmitting}>REGISTRARSE</button>
        <Link to='/'>CANCELAR</Link>
      </form>
    </main>
  )
}