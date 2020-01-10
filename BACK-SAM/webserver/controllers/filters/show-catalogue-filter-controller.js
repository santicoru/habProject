'use strict';

const mysqlPool = require('../../../database/mysql-pool');

async function showCatalogueFilter(req, res, next) {
  const filter = req.query;
  console.log(filter.category);

  if (filter.minPrice === 'undefined') { filter.minPrice = 0; console.log(filter.minPrice); }
  if (filter.maxPrice === 'undefined') { filter.maxPrice = 100000; console.log(filter.maxPrice); }

  if (filter.category === 'undefined') {
    try {
      const connection = await mysqlPool.getConnection();
      const sqlprice = `SELECT * FROM product where final_price>${filter.minPrice} and final_price<${filter.maxPrice}`;

      const [productsData] = await connection.query(sqlprice);
      connection.release();

      return res.status(200).send(productsData);
    } catch (e) {
      console.error(e);
      return res.status(500).send(e.message);
    }
  }
  if (filter.category !== 'undefined') {
    try {
      const connection = await mysqlPool.getConnection();
      const sqlcategory = `SELECT * FROM product where final_price>${filter.minPrice} and final_price<${filter.maxPrice} and category='${filter.category}'`;

      const [productsData] = await connection.query(sqlcategory);
      connection.release();

      return res.status(200).send(productsData);
    } catch (e) {
      console.error(e);
      return res.status(500).send(e.message);
    }
  }
  console.log(filter);
}

module.exports = showCatalogueFilter;