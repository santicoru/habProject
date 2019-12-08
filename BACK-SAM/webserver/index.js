'use strict';

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(cors());

app.use('/api/account', routes.account);
app.use('/api/auth', routes.auth);

app.get('/', (req, res, next) => {
  res.send('base url: /api'); axios.interceptors.response.use(
    function (response) {
      // Si la respuesta trae un token entonces lo almaceno
      // Mi aplicación supone que mi backend envia un objeto con { token, user } siempre
      // que el usuario se identifica (Login, Registro)
      // En otra aplicación podría ser diferente
      if (response.data.token) {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        token = response.data.token;
      }
      return response;
    },
    function (error) {
      // En caso de que el token expire (401)
      // y no sea el endpoint de login (que tambien devuelve 401 cuando las credenciales son invalidas)
      // Entonces redirijo a la URL de login y limpio el localStorage
      if (
        error.response.status === 401 &&
        error.config.url.indexOf("/auth") === -1
      ) {
        localStorage.removeItem("currentUser");
        window.location.href = "/login";
      }
      // Siempre devolver el error de esta forma, a través de Promise.reject
      return Promise.reject(error);
    }
  );
});

let server = null;

async function listen(port) {
  if (server === null) {
    server = await app.listen(port);
  } else {
    console.error('Can not listen, server already initialized');
  }
}

async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error('can not close a non started server');
  }
}

module.exports = {
  listen,
  close,
};