const fs = require('fs');
const validator = require('validator');
const chalk =  require('chalk');

const utils = require('./utils');
const getNotes = require('./notes');

fs.writeFileSync('notes.txt', 'This file was created by nodejs.\n');
fs.appendFileSync('notes.txt', 'This is the new message.\n')

const name = 'Werison';
console.log(name);
console.log(utils.age);

console.log(utils.add(6, 7));
console.log(getNotes());

console.log(validator.isEmail('werison@email.com'));
console.log(validator.isURL('http://url.com'));

console.log(chalk.red.inverse.bold('Error!!!'));
console.log(chalk.green.inverse.bold('Success.'));