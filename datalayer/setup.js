const { client } = require('./client');
const {
  createChefs,
  readChefs
} = require('./chefs');

const sync = async () => {
  const sql = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  DROP TABLE IF EXISTS recipes;
  DROP TABLE IF EXISTS chefs;

  CREATE TABLE chefs(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    name VARCHAR(100)
  );

  CREATE TABLE recipes(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v1(),
    "chefId" UUID,
    name VARCHAR(255)
  );`;

  await client.query(sql);

  await createChefs('chief');
  await createChefs('darrington');
  await createChefs('jasper');
}

module.exports = { sync };
