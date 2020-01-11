'use strict';

const mysqlPool = require("../../../database/mysql-pool");

async function showProduct(req, res, next) {
  const productId = req.params.productId;

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `select product.*, rate.* FROM product, rate where product.id=rate.id_product and product.id=${productId}`;
    const [productData] = await connection.query(sqlQuery);
    connection.release();
    console.log(productData);

    res.status(200).send(productData);
  } catch (e) {
    return res.status(500).send({
      message: e.message,
    });
  }
}

module.exports = showProduct;
