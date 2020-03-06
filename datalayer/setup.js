const { client } = require('./client');

const sync = async () => {
  const sql = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS recipes;
  DROP TABLE IF EXISTS chefs;

  CREATE TABLE chefs(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    name VARCHAR(100) NOT NULL CHECK(char_length(name) > 1)
  );

  CREATE TABLE recipes(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    "chefId" UUID REFERENCES chefs(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL CHECK(char_length(name) > 1)
  );`;
  await client.query(sql);
}

sync()
