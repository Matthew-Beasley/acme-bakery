const { client } = require('./client');

const createChefs = async (chefName) => {
  const sql = `
  INSERT INTO chefs (chef_name)
  VALUES ($1)
  RETURNING *`;
  return (await client.query(sql, [chefName])).rows[0];
}


const readChefs = async () => {
  return (await client.query('SELECT * FROM chefs')).rows;
}

module.exports = {
  createChefs,
  readChefs
};