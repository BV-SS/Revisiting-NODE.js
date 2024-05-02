// require express module - 3rd
const express = require('express');

// init express
const app = express();

// listen to get request 
app.get('/',(req,res) =>{
    // res.send("<p>Hello World with Express</p>"); // a simple request
    res.sendFile('./views/index.html', {root: __dirname});
})

app.get('/about',(req,res) =>{
    // res.send("<p>Hello World with Express</p>"); // a simple request
    res.sendFile('./views/about.html', {root: __dirname});
})

// redirects  - use redirect() from res obj - automatically sets the response status code for the redirect request
app.get("/about-us",(req,res) =>{
    res.redirect("/about");
})

// 404 
/* use() -- is a default case for all routes will run if no route case above it is matched and no res is sent -- should be placed at the end of all routes as it will run without a condition
status code will not be added to the func return we can chain the status code manually like so
*/
app.use((req,res)=>{
    res.status(404).sendFile('./views/error.html',{root:__dirname});
})

// listin to requests
app.listen(3000,()=>{
    console.log('Listining to requests on port 3000...')
})