const { Command } = require('commander');

const { getVar } = require('./variables');
const { version } = require('../package.json');

const program = new Command();
const commander = {};

// initialize the pg command
commander.init = async () =>
	program
		.name('pg')
		.version('PG CLI Version ' + version)
		.description('Postgres CLI');

// adds all the commands from the directory
commander.addCommands = async () => {
	const cwd = getVar('cliPath') + '/commands';

	require('fs')
		.readdirSync(cwd)
		.forEach((file) => require(cwd + '/' + file)(program));
};

// parses and closes the command
commander.close = async () => {
	program.parseAsync();
};

module.exports = commander;
