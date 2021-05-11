const fs = require('fs');

fs.writeFileSync('notes-app/notes.txt', 'This file was created by nodejs.\n');
fs.appendFileSync('notes-app/notes.txt', 'This is the new message.\n')