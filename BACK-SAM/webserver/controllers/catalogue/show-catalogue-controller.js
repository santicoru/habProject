'use strict';

const mysqlPool = require('../../../database/mysql-pool');

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

async function showCatalogue(req, res, next) {
  try {
    const connection = await mysqlPool.getConnection();
    const sqlShow = 'SELECT * FROM product';

    const [productsData] = await connection.query(sqlShow);
    connection.release();

    return res.status(200).send(productsData);
  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }
}

module.exports = showCatalogue;
