'use strict';

const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validateSchema(payload) {
  const schema = Joi.object({
    value: Joi.string(),
    comment: Joi.string(),
    productId: Joi.number(),
    userId: Joi.number(),
  });
  Joi.assert(payload, schema);
}

async function createRateProduct(req, res, next) {
  const { userId } = req.claims;
  const productId = req.params.productId;
  const rate = req.body;
  const rateDate = { ...rate, userId, productId };
  console.log(rateDate);

  try {
    await validateSchema(rateDate);
  } catch (e) {
    return res.status(400).send(e);
  }

  try {
    const now = new Date();
    const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');
    const connection = await mysqlPool.getConnection();
    const sqlInsercion = 'INSERT INTO rate SET ?';

    await connection.query(sqlInsercion, {
      user_id: userId,
      id_product: productId,
      comment_in_rate: rateDate.comment,
      value_in_rate: rateDate.value,
      date_comment: createdAt,
    });
    connection.release();
    res.status(201).send('product created');

  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }
}

module.exports = createRateProduct;