const http = require('http');

const fs = require('fs');

// create a server 
const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');

    let path = './views/';

    switch(req.url){
        case '/': 
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default :
            path += 'error.html';
            res.statusCode = 400;
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
   
})

server.listen(3000,'localhost',() => {
    console.log('listining to port 3000 ');
})

