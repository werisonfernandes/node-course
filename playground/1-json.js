const fs = require('fs');

const book = {
    name: "Gunther",
    planet: "Earth",
    age: 54
};

const bookJson = JSON.stringify(book);
console.log(bookJson);

const dataBuffer = fs.readFileSync('1-json.json');
console.log(dataBuffer);

const dataJSON = dataBuffer.toString()
console.log(dataJSON);

const user = JSON.parse(dataJSON);

user.name = 'Gunther';
user.age = 54;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);