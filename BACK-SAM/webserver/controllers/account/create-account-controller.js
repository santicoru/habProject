'use strict';

const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const sendgridMail = require('@sendgrid/mail');
const mysqlPool = require('../../../database/mysql-pool');

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

sendgridMail.setApiKey(process.env.SENDGRID_API_KEY);

async function validateSchema(payload) {
  /*
  *  REVISAR BASE DE DATOS Y MODIFICAR VALIDACIONES
  */
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required(),
    name: Joi.string(),
    user_type: Joi.string(),
    surname: Joi.string(),
    phone: Joi.string(),
    birth_date: Joi.string(),
    document_type: Joi.string(),
    document_number: Joi.string(),
  });
  Joi.assert(payload, schema);
}

async function sendEmailRegistration(userEmail) {

  const msg = {
    to: userEmail,
    from: {
      email: 'andrea.castro.salgado@hotmail.com',
      name: 'SAM',
    },
    subject: 'Gracias por registrarte en SAM',
    text: 'Ahora podrás encontrar el software que necesitas en la medida que necesitas',
  };
  const data = await sendgridMail.send(msg);
  return data;
}

async function createAccount(req, res, next) {
  const accountData = { ...req.body };
  /*
  *sustituir por el del usuario en producción:
  */
  const userEmail = 'andycs2208@gmail.com';

  try {
    await validateSchema(accountData);
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }

  //borrar???
  // try {
  //     await sendEmailRegistration(userEmail, verificationCode);
  // } catch (e) {
  //     return res.status(400).send(e, 'n0 n0 n0');
  // }
  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');
  const securePassword = await bcrypt.hash(accountData.password, 10);

  /*
  *  REVISAR BASE DE DATOS Y MODIFICAR INSERCIONES
  */
  try {
    const connection = await mysqlPool.getConnection();
    const sqlInsercion = 'INSERT INTO user SET ?';

    await connection.query(sqlInsercion, {
      name: accountData.name,
      surname: accountData.surname,
      user_type: accountData.user_type,
      email: accountData.email,
      password: securePassword,
      phone: accountData.phone,
      birth_date: accountData.birth_date,
      document_type: accountData.document_type,
      document_number: accountData.document_number,
      created_at: createdAt,
    });

    const [id] = await connection.query(`SELECT id FROM user WHERE email='${accountData.email}'`);
    const idUser = id[0].id;

    connection.release();

    const payloadJwt = {
      userId: idUser,
      role: accountData.user_type,
    };

    const jwtExpiresIn = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL);
    const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, {
      expiresIn: jwtExpiresIn,
    });

    const response = {
      token,
      expiresIn: jwtExpiresIn,
    };

    await sendEmailRegistration(userEmail)
    // await sendEmailRegistration(accountData.email, verificationCode);
    return res.status(200).send(response);

  } catch (e) {
    console.error(e);
    return res.status(500).send('no se ha grabado nada');
  }

}


module.exports = createAccount;