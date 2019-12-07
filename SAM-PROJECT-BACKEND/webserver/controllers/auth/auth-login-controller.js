'use strict';

const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const mysqlPool = require('../../../database/mysql-pool');

async function validateSchema(payload) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    });
    Joi.assert(payload, schema);
}

async function login(req, res, next) {
    const authData = { ...req.body };

    try {
        await validateSchema(authData);
    } catch (e) {
        return res.status(400).send(e);
    }

    try {
        const sqlQuery = `SELECT id, email, password, user_type
            FROM user
            WHERE email='${authData.email}'`;
        const connection = await mysqlPool.getConnection();
        const [result] = await connection.query(sqlQuery);
        connection.release();

        console.log(result[0]);

        if (result.length !== 1) {
            return res.status(401).send();
        }

        const userData = result[0];
        const isPasswordOk = await bcrypt.compare(authData.password, userData.password);

        if (!isPasswordOk) {
            return res.status(401).send();
        }

        const payloadJwt = {
            userId: userData.id,
            role: userData.user_type,
        };

        const jwtExpiresIn = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL);
        const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, {
            expiresIn: jwtExpiresIn,
        });

        const response = {
            accessToken: token,
            expiresIn: jwtExpiresIn,
        };

        return res.status(200).send(response);

    } catch (e) {
        console.error(e);
        return res.status(500).send({
            messag: e.message,
        });
    }
}

module.exports = login;