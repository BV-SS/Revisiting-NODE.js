// using lodash utility functions
const _ = require('lodash');

const num = _.random(1,10);
console.log(num);

// to run a function only once 
const greet = _.once(() =>{
    console.log('hello world');
})

greet();
greet(); // called twice but will run once

// to learn more about utility functions in lodash visit -> https://lodash.com/
