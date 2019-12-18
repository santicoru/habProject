'use strict';

const mysqlPool = require('../../../database/mysql-pool');

async function getOrders(req, res, next) {
    const { id, idUser, } = req.claims;
    try {
        const sqlQuery = `SELECT *
    FROM orderFinal
    WHERE orderFinal.id = ?
      AND orderFinal.idUser = ?
    ORDER BY orderDate`;

        const connection = await mysqlPool.getConnection();
        const [ordersData] = await connection.execute(sqlQuery, [id]);
        connection.release();

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

        return res.status(200).send({
            data: Object.values(orderHydrated),
        });
    } catch (e) {
        console.error(e);
        return res.status(500).send({
            message: e.message,
        });
    }
}

module.exports = getOrders;