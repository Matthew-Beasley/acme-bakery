const { client } = require('./client');

const createChefs = async (name) => {
  const sql = `
  INSERT INTO chefs (name)
  VALUES ($1)
  RETURNING *`;
  return (await client.query(sql, [name])).rows[0];
}


const readChefs = async () => {
  return (await client.query('SELECT * FROM chefs')).rows;
}

module.exports = {
  createChefs,
  readChefs
};