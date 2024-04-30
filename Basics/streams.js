// while dealing with lager files its easier to work with streams rather than working with core methods of fs  odule
// here we are creating a stream of data which will read a file and write the data inside another file
// streams working 
/* for ex while transfering water from a pool to a small pond we use a tank if we wait for the tank to completly fill up and then transfer it will take a lot of time and users have to wait,
but if we deliver buckets of water(buffers) to the pond timely till the next bucket fills then users can immediately start using the water(data) don't have to wait that much.
*/ 

const fs = require('fs');

const readStream = fs.createReadStream('./docs/doc3.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/doc4.txt');

// readStream.on('data' ,(chunk) => {
//     // console.log('chunk ---\n',chunk.toString());
//     // console.log('\n------------------chunk --------------------\n',chunk.toString());
//     writeStream.write('\n -------NEW CHUNK-----\n');
//     writeStream.write(chunk);
// })

// we can create the above same function with inbuit pipe function of fs

readStream.pipe(writeStream);