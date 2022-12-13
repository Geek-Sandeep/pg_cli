const client = require('../helpers/pg-client');
const { success, error } = require('../helpers/print');

module.exports = async (databaseName) => {
  try {
    await client.connect();

    // create user
    await client.query(`CREATE USER ${databaseName}_user WITH ENCRYPTED PASSWORD '${Date.now()}'`);

    // create database with owner user
    await client.query(`CREATE DATABASE ${databaseName} OWNER ${databaseName}_user`);
    
    // grant all privileges to user
    await client.query(`GRANT ALL PRIVILEGES ON DATABASE ${databaseName} TO ${databaseName}_user`);
    
    success("Database created!", databaseName);
  } catch (err) {
    error(err.message);
  }

  await client.end();
};