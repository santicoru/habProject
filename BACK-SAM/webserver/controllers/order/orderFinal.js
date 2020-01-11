'use strict';
const uuidV4 = require('uuid/v4');
const mysqlPool = require('../../../database/mysql-pool');

async function orderFinal(req, res, next) {
  const { userId } = req.claims;
  console.log(userId);
  const order = req.body;
  const orderFinal = JSON.parse(order.order);
  console.log(orderFinal[0]);

  const now = new Date();
  const createdAt = now.toISOString().substring(0, 19).replace('T', ' ');
  console.log(createdAt);
  const id = uuidV4();
  console.log(id);
  try {
    const connection = await mysqlPool.getConnection();

    const sqlOrderFinal = `INSERT INTO order_final SET ?`;
    await connection.query(sqlOrderFinal, {
      id,
      price_final: order.price_final,
      order_date: createdAt,
      user_id: userId,
    })

    for (let order in orderFinal) {
      const sqlProduct = 'INSERT INTO enter_product_order SET ?';
      await connection.query(sqlProduct, {
        id_product: orderFinal[order].id,
        id_order: id,
        quantity: orderFinal[order].quantity,
        price_at_order: orderFinal[order].final_price,
      })
    }


    connection.release();

    res.status(201).send('order created');

  } catch (e) {
    console.error(e);
    return res.status(500).send(e.message);
  }
}

module.exports = orderFinal;