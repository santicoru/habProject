'use strict';

require('dotenv').config();
const webServer = require('./webserver');
const mysqlPool = require('./database/mysql-pool');

const httpListenigPort = process.env.PORT;

async function initApp() {
    try {
        await mysqlPool.connect();
        await webServer.listen(httpListenigPort);
        console.log(`server running at ${httpListenigPort}`);
    } catch (e) {
        console.error(e);
        process.exit(-1);
    }
}

initApp();

// const mysql = require('mysql2');

// const conect = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USERNAME,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// });

// const query = 'SELECT * FROM `product`';

// function reply(err, result) {
//     if (err) {
//         console.error('Error: ', err);
//         process.exit(-1);
//     }
//     console.log(result);
//     conect.close();
// }

// conect.query(query, reply);