import React from 'react';
import { Link } from 'react-router-dom';
import useForm from 'react-hook-form';
import { useAuth } from '../shared/context/auth-context';
import { LOGIN_VALIDATIONS } from '../shared/validations';
import { Field } from '../components/Field';
import logo from '../assets/images/logo-a.png';

function Login() {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState,
    errors,
    setError,
    setValue
  } = useForm({
    mode: 'onBlur'
  });

  const handleSignin = formData => {
    console.log(formData);
    return signIn(formData)
      .then(d => console.log(d))
      .catch(error => {
        setError(
          'password',
          'invalidCredentials',
          'The email or the password are invalid'
        );
        setValue('password', '');
      });
  };

  return (
    <React.Fragment>
      <main className='main-login'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <section className='form-login'>
          <h3>Inicia sesión</h3>
          <form onSubmit={handleSubmit(handleSignin)}>
            <div className='group3'>
              <label>Email</label>
              <Field
                name='email'
                type='text'
                validations={register(LOGIN_VALIDATIONS.email)}
                formState={formState}
                errors={errors}
              />
            </div>
            <div className='group3'>
              <label>Contraseña</label>
              <Field
                name='password'
                type='password'
                validations={register(LOGIN_VALIDATIONS.password)}
                formState={formState}
                errors={errors}
              />
            </div>
            <button
              type='submit'
              className='red-btn'
              disabled={formState.isSubmitting}
            >
              Enviar
            </button>
          </form>
          <div className='register-link'>
            <Link to='/register'>No tento cuenta, quiero registrarme</Link>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export { Login };
