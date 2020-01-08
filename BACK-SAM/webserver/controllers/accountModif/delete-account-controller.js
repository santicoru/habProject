'use strict';

const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

async function deleteAccount(req, res, next) {

  const { userId } = req.claims;
  console.log(userId);
  try {
    const sqlDeleteUser = `DELETE FROM user WHERE id='${userId}'`;

    const connection = await mysqlPool.getConnection();

    const deleteUser = connection.query(sqlDeleteUser);
    console.log(deleteUser);
    connection.release();

    return res.status(204).send();
  } catch (e) {
    return status(500).send({
      message: e.message,
    });
  }
}
module.exports = deleteAccount;