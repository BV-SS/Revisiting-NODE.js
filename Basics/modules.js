// const x = require('./people');
// with desturcturing 
const {people,ages} = require('./people');

console.log(people,ages);

// importing core modules 
const os = require('os');
console.log(os.platform(),os.homedir(),os.totalmem(), os.freemem())