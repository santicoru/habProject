'use strict';
const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validateSchema(payload) {
  const schema = Joi.object({
    init_price: Joi.number(),
    discount: Joi.number(),
    final_price: Joi.number(),
  });
  Joi.assert(payload, schema);
}

async function editProduct(req, res, next) {
  const productId = req.params.productId;
  const { userId, role } = req.claims;
  const productData = { ...req.body };
  console.log(productData)

  if (role !== 'colaborator') {
    return res.status(401).send('sin permisos');
  }

  try {
    await validateSchema(productData);
  } catch (e) {
    return res.status(400).send(e);
  }

  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `UPDATE product SET ? WHERE id=${productId} AND user_id=${userId}`;
    await connection.query(sqlQuery, {
      init_price: productData.init_price,
      discount: productData.discount,
      final_price: productData.final_price,
    });
    connection.release();
    res.status(200).send('Cambios realizados correctamente');
  } catch (e) {
    return res.status(500).send({
      message: e.message,
    });
  }
}

module.exports = editProduct;