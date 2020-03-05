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


const updateChefs = async (name, id) => {
  const sql = `
  UPDATE chefs
  SET name = $1
  WHERE id = $2
  RETURNING *`;
  return (await client.query(sql, [name, id])).rows[0];
}


const deleteChefs = async (id) => {
  const sql = `
  DELETE FROM chefs
  WHERE id = $1
  RETURNING *`;
  return (await client.query(sql, [id])).rows[0];
}

module.exports = {
  createChefs,
  readChefs,
  updateChefs,
  deleteChefs
};