const { client } = require('./client');

const createRecipes = async (recipeName, chefId) => {
  const sql = `
  INSERT INTO recipes (name, "chefId")
  VALUES ($1, $2)
  RETURNING *`;
  return (await client.query(sql, [recipeName, chefId])).rows[0];
}


const readRecipes = async () => {
  return (await client.query('SELECT * FROM recipes')).rows;
}


const updateRecipes = async (chefId, name, id) => {
  const sql = `
  UPDATE recipes
  SET "chefId" = $1, name = $2
  WHERE id = $3
  RETURNING *`;
  return (await client.query(sql, [chefId, name, id])).rows[0];
}


const deleteRecipes = async (id) => {
  const sql = `
  DELETE FROM recipes
  WHERE id = $1
  RETURNING *`;
  return (await client.query(sql, [id])).rows[0];
}

module.exports = {
  createRecipes,
  readRecipes,
  updateRecipes,
  deleteRecipes
};
