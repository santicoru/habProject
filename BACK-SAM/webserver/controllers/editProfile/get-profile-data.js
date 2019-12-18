'use strict';

const mysqlPool = require('../../../database/mysql-pool');

async function getProfile(req, res, next) {
    const { id, idUser, } = req.claims;
    try {
        const connection = await mysqlPool.getConnection();
        const sqlgetProfile = `SELECT userSam.nameOrSocial, userSam.email, 
        userSam.passwordAccount, userSam.createdAt
    FROM userSam`;
        await connection.query(sqlgetProfile, [
            orderData.title,
            orderData.content,
            id,
            userId,
        ]);
        connection.release();

        return res.status(204).send();


        /*
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
    */
    } catch (e) {
        console.error(e);
        return res.status(500).send({
            message: e.message,
        });
    }
}

module.exports = getProfile;
