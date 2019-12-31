const mysqlPool = require("../../../database/mysql-pool");

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

async function showProduct(req, res, next) {
  return res.status(200).send();
}

module.exports = showProduct;
