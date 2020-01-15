'use strict';
const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validateSchema(payload) {
	const schema = Joi.object({
		date_end: Joi.date(),
	});
	Joi.assert(payload, schema);
}

async function editPack(req, res, next) {
	const idProductPack = req.params.idProductPack;
	const { userId, role } = req.claims;
	const productData = { ...req.body };
	console.log(productData);
	console.log(idProductPack);


	if (role !== 'organizer') {
		return res.status(401).send('sin permisos');
	}

	try {
		await validateSchema(productData);
	} catch (e) {
		return res.status(400).send(e);
	}

	try {
		const connection = await mysqlPool.getConnection();
		const sqlQuery = `UPDATE package SET ? WHERE id='${idProductPack}' AND user_id=${userId}`;
		await connection.query(sqlQuery, {
			date_end: productData.date_end,
		});
		connection.release();
		res.status(200).send('updated product');
	} catch (e) {
		return res.status(500).send({
			message: e.message,
		});
	}
}

module.exports = editPack;