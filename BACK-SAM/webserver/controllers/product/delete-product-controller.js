'use strict';

const mysqlPool = require('../../../database/mysql-pool');

async function deleteProduct(req, res, next) {
  const productId = req.params.productId;
  const { userId, role } = req.claims;

  if (role !== 'colaborator') {
    return res.status(401).send('sin permisos');
  }
  try {
    const sqlQuery = `DELETE FROM product WHERE id=${productId}`;
    const connection = await mysqlPool.getConnection();
    const [productData] = await connection.execute(sqlQuery);
    connection.release();
    return res.status(200).send('delete product');
  } catch (e) {
    return res.status(500).send({
      message: e.message,
    });
  }
}

module.exports = deleteProduct;
