'use strict';

const mysqlPool = require('../../../database/mysql-pool');

async function updateProfile(req, res, next) {

    try {
        const connection = await mysqlPool.getConnection();
        const sqlUpdateNote = `UPDATE userSam
      SET passwordAccount = ?
      WHERE id = ?
        AND nameOrSocial = ?`;

        await connection.query(sqlUpdateNote, [
            profileData.title,
            profileData.content,
            id,
            nameOrSocial,
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

module.exports = updateProfile;