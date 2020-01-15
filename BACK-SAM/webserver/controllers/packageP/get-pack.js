'use strict';
const mysqlPool = require('../../../database/mysql-pool');

async function getPack(req, res, next) {
  const { userId, role } = req.claims;
  if (role !== 'organizer') {
    return res.status(401).send('sin permisos');
  }
  try {
    const sqlQuery = `SELECT * FROM package WHERE user_id='${userId}'`;
    const connection = await mysqlPool.getConnection();
    const [productData] = await connection.execute(sqlQuery);
    connection.release();
    return res.status(200).send(productData);
  } catch (e) {
    return res.status(500).send({
      message: e.message,
    });
  }
}

module.exports = getPack;