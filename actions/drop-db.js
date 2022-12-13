const client = require('../helpers/pg-client');
const { success, error } = require('../helpers/print');

module.exports = async (databaseName) => {
  try {
    await client.connect();

    // drop database 
    await client.query(`DROP DATABASE ${databaseName}`);

    // drop dadtabase user
    await client.query(`DROP USER ${databaseName}_user`);

    success("Database droped!", databaseName);
  } catch (err) {
    error(err.message);
  }

  await client.end();
};