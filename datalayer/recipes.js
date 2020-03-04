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

module.exports = {
  createRecipes,
  readRecipes
};
