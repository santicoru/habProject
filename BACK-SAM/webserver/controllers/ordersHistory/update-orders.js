/*'use strict';

const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validateSchema(payload) {
    const schema = Joi.object({
        id: Joi.string().trim().min(1).max(255).required(),
        prizeFinal: Joi.string().trim().min(1).max(65536).required(),
        orderDate: Joi.string().trim().min(1).max(65536).required(),
        userId: Joi.string().guid({
            version: ['uuidv4'],
        }).required(),
        id: Joi.string().guid({
            version: ['uuidv4'],
        }).required(),
    });

    Joi.assert(payload, schema);
}

async function updateOrder(req, rex, next) {
    //1. pedir el historial de compra
    //2. coge en la base de datos las compras hechas
    //3. meter el nuevo pedido en la base de datos
    //4. devolver el historial de compra ya actualizado, con el nuevo pedido


    //función para confirmar la compra; meter los productos en la base de datos
}
*/

/*
async function updateOrder(req, res, next) {
    const { id } = req.params;
    const { userId } = req.claims;
    const orderData = {
        ...req.body,
        id,
        userId,
    };

    try {
        await validateSchema(orderData);
    } catch (e) {
        console.error(e);
        return res.status(400).send(e);
    }

    try {
        const connection = await mysqlPool.getConnection();
        const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
        const sqlUpdateNote = `UPDATE orderFinal
      SET id = ?
        prizeFinal = ?
        orderDate = ?
        userId = ?
      WHERE id = ?
        AND userId = ?`;

        await connection.query(sqlUpdateNote, [
            orderData.title,
            orderData.content,
            id,
            userId,
        ]);
        connection.release();

        return res.status(204).send();
    } catch (e) {
        console.error(e);
        return res.status(500).send({
            message: e.message,
        });
    }
}
*/

//module.exports = updateOrder;