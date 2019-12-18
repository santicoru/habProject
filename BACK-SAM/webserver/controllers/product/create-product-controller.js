'use strict';


const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

async function validateSchema(payload) {
  const schema = Joi.object({
    name: Joi.string(),
    description: Joi.string(),
    init_price: Joi.string(),
    discount: Joi.string(),
    final_price: Joi.string(),
    category: Joi.string(),
    userId: Joi.number(),
    role: Joi.string(),
  });
  Joi.assert(payload, schema);
}

async function createProduct(req, res, next) {
  let { userId, role } = req.claims;
  const productData = { ...req.body, userId, role };
  console.log(productData);
  try {
    await validateSchema(productData);
  } catch (e) {
    return res.status(400).send(e);
  }

  try {

    if (role !== 'colaborator') {
      return res.status(401).send('sin permisos');
    }

    const connection = await mysqlPool.getConnection();
    const sqlInsercion = 'INSERT INTO product SET ?';

    await connection.query(sqlInsercion, {
      name: productData.name,
      description: productData.description,
      init_price: productData.init_price,
      discount: productData.discount,
      final_price: productData.final_price,
      category: productData.category,
      user_id: productData.userId,
    });

    connection.release();

    res.status(201).send('product created');

  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }
}

module.exports = createProduct;