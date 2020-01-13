'use strict';
const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validateSchema(payload) {
  const schema = Joi.object({
    code: Joi.string(),
  });
  Joi.assert(payload, schema);
}

async function getCodePack(req, res, next) {
  const code = req.params.code;
  console.log(code);
  // try {
  //   await validateSchema(code);
  // } catch (e) {
  //   return res.status(400).send(e);
  // }

  try {
    const connection = await mysqlPool.getConnection();
    const sqlDate = `SELECT date_end FROM package WHERE code_package='${code}'`
    const sqlQuery = `SELECT 
    product.id, product.name, product.photo, product.final_price as old_price,
    package.date_end,
    product_include_package.paq_disc as discount, product_include_package.paq_price as final_price
    FROM product
    INNER JOIN product_include_package
    ON product.id=product_include_package.id_product
    INNER JOIN package
    ON product_include_package.id_paq=package.id
    WHERE package.code_package='${code}'`;
    const [dateEnd] = await connection.execute(sqlDate);
    const [productsInPack] = await connection.execute(sqlQuery);
    connection.release();
    return res.status(200).send({
      data: productsInPack,
      dateEnd,
    });
  } catch (e) {
    return res.status(500).send({
      message: e.message,
    });
  }
}





module.exports = getCodePack;