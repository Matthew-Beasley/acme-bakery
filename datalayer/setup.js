const { client } = require('./client');

const setup = async () => {
  const sql = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS recipes;
  DROP TABLE IF EXISTS chefs;

  CREATE TABLE recipes(
    recipe_id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    chef_name VARCHAR(100)
    recipe_name VARCHAR(255)
  )

  CREATE TABLE chefs(
    chef_id UUID PRIMARY KEY uuid_generate_v1(),
    chef_name VARCHAR(100)
  )`;
  await client.query(sql);
}