'use strict';
const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validateSchema(payload) {
  const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    init_price: Joi.number(),
    discount: Joi.number(),
    final_price: Joi.number(),
    category: Joi.string(),
    userId: Joi.number(),
    role: Joi.string(),
    photo: Joi.string(),
  });
  Joi.assert(payload, schema);
}

async function editProduct(req, res, next) {
  const productId = req.params.productId;
  const { userId, role } = req.claims;
  const productData = { ...req.body };

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
      name: productData.name,
      description: productData.description,
      init_price: productData.init_price,
      discount: productData.discount,
      final_price: productData.final_price,
      category: productData.category,
      user_id: userId,
      photo: productData.photo,
    });
    connection.release();
    res.status(200).send('updated product');
  } catch (e) {
    return res.status(500).send({
      message: e.message,
    });
  }
}

module.exports = editProduct;