/**
 * Create the database .
 */
const create_db = require('../actions/create-db');

module.exports = async (program) => {
  // bootstrap project command
  program
    .command('create:db')
    .description(
      'create the postgres database'
    )
    .argument('<database-name>', 'The name of the database')
    .action(create_db);
};
