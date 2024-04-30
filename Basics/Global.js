// Global oject in NODE
 /* global object in node.js is similar to windows object in browser js it gives us access to several differnet globally available methods like settimeout, setInterval etc. */

 // Example
//  console.log(global);

// runs after 3 seconds - once
setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

// runs after every 1 second 
const int = setInterval(() => {
console.log('in the interval')
}, 1000);

// globally availabe properties
console.log(__dirname);

console.log(__filename);