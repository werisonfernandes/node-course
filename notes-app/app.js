const fs = require('fs');
const utils = require('./utils');
const getNotes = require('./notes');

fs.writeFileSync('notes-app/notes.txt', 'This file was created by nodejs.\n');
fs.appendFileSync('notes-app/notes.txt', 'This is the new message.\n')

const name = 'Werison';
console.log(name);
console.log(utils.age);

console.log(utils.add(6, 7));
console.log(getNotes());