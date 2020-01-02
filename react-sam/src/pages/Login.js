import React from "react";
import { Link } from "react-router-dom";
import useForm from "react-hook-form";
import { useAuth } from "../shared/context/auth-context";
import { LOGIN_VALIDATIONS } from "../shared/validations";
import { Field } from "../components/Field";

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
    mode: "onBlur"
  });

  const handleSignin = formData => {
    console.log(formData);
    return signIn(formData)
      .then(d => console.log(d))
      .catch(error => {
        setError(
          "password",
          "invalidCredentials",
          "The email or the password are invalid"
        );
        setValue("password", "");
      });
  };

  return (
    <React.Fragment>
      <main className="main-login">
        <section>
          <h3>Inicia sesión</h3>
          <form onSubmit={handleSubmit(handleSignin)}>
            <Field
              name="email"
              label="Email"
              type="text"
              validations={register(LOGIN_VALIDATIONS.email)}
              formState={formState}
              errors={errors}
              placeholder="Enter your email"
            />
            <Field
              name="password"
              label="Password"
              type="password"
              validations={register(LOGIN_VALIDATIONS.password)}
              formState={formState}
              errors={errors}
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="btn"
              disabled={formState.isSubmitting}
            >
              Enviar
            </button>
          </form>
          <div>
            <Link to="/register" className="register-link">
              No tento cuenta, quiero registrarme
            </Link>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export { Login };
