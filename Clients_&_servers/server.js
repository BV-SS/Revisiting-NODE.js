// In Node we setup a server manually like so via http module
const http = require('http');

// creating a server via createserver()
const server = http.createServer((req,res) =>{
    console.log('request made')
});

server.listen(3000,'localhost',()=>{
    console.log('Listining to requests on port number 3000...');
})
