'use strict';

const mysqlPool = require('../../../database/mysql-pool');

async function getPackage(req, res, next) {
    const userId = req.claims.userId;

    try {
        const getOrdersQuery = `select 
        p.id, 
        p.name, 
        p.category, 
        p.description, 
        p.init_prize, 
        p.discount, 
        p.final_prize, 
        p.photo, 
        p.user_id
        from product p
        inner join product_include_package  pip
        on p.id = pip.id_product 
        inner join package paq
        on pip.id_paq = paq.id
        inner join enter_package_order  epaqo
        on paq.id = epaqo.id_paq
        inner join order_final of
        on epaqo.id_order = of.id
        inner join user_sam us
        on of.id = us.id
        where us.id=?`;
        const connection = await mysqlPool.getConnection(); //la query meterla en una función para que quede más limpia
        const [orderData] = await connection.execute(getOrdersQuery, [userId]); //no es lo que devuelve, sino los parámetros que le paso lo de [id, priceFinal...]
        connection.release();

        return res.send({
            data: orderData,
        });
    } catch (e) {
        console.error(e);
        res.status(500).send({
            message: e.message,
        });
    }
}

module.exports = getPackage;