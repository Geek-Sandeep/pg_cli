/**
 * Create the database .
 */
const drop_db = require('../actions/drop-db');

module.exports = async (program) => {
  // bootstrap project command
  program
    .command('drop:db')
    .description(
      'drop the postgres database'
    )
    .argument('<database-name>', 'The name of the database')
    .action(drop_db);
};
