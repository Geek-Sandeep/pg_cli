const colors = require('colors');

const success = (msg1, msg2) => console.log('>', msg1.brightGreen, '→', msg2);

const error = (msg1) => console.log('>', msg1.brightRed);

module.exports = { success, error };
