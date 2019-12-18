'use strict';

const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validate(payload) {
    const schema = Joi.object({
        noteId: Joi.string().guid({
            version: ['uuidv4'],
        }).required(),
        userId: Joi.string().guid({
            version: ['uuidv4'],
        }).required(),
    });

    Joi.assert(payload, schema);
}

async function getOrderUsingOneQuery(id, userId) {
    const connection = await mysqlPool.getConnection();
    const getOrdersQuery = `SELECT *
    FROM orderFinal
    WHERE orderFinal.id = ?
      AND orderFinal.idUser = ?
    ORDER BY orderDate`;
    const [ordersData] = await connection.execute(getOrdersQuery, [id, userId]);
    connection.release();

    if (ordersData.length < 1) {
        return null;
    }

    const orderHydrated = ordersData.reduce((acc, rawOrder) => {
        const order = rawOrder.orderId ? {
            id: rawOrder.id,
            priceFinal: rawOrder.prizeFinal,
            orderDate: rawOrder.orderDate,
            idUser: rawOrder.idUser,
        } : undefined;

        const orderProcessed = acc[rawOrder.id];

        if (!orderProcessed) {
            return {
                ...acc,
                [rawOrder.id]: {
                    ...rawOrder,
                    orders: order ? [order] : [],
                    id: undefined,
                    order: undefined,
                },
            }
        }

        return {
            ...acc,
            [rawOrder.id]: {
                ...rawOrder,
                orders: order ? [...orderProcessed.orders, order] : orderProcessed,
                id: undefined,
                order: undefined,
            },
        };
    }, {});

    return orderHydrated[id];
}

async function getOrder(req, res, next) {
    const id = req.params.id;
    const userId = req.claims.userId;

    const payload = {
        id,
        userId,
    };

    try {
        await validate(payload);
    } catch (e) {
        return res.status(400).send(e);
    }

    try {
        const orderData = await getOrderUsingOneQuery(id, userId);
        if (!orderData) {
            return res.status(404).send();
        }

        const orderResponse = {
            data: orderData,
        };

        return res.send(orderResponse);
    } catch (e) {
        console.error(e);
        res.status(500).send({
            message: e.message,
        });
    }
}

module.exports = getOrder;