const express = require('express');

const app  = express(); 

// register ejs
app.set('view engine','ejs');

app.listen(3000,() => {
    console.log('listining to port 3000');
})

// custom middleware to log req info middleware 
app.use((req,res,next) => {
    console.log("path :",req.path);
    console.log("hostname :",req.hostname);
    console.log("method :",req.method);
    next();  // next function is used to tell node to move on to next bit of code explicitly as node by default doesn't continue executing with custom middleware like this 
})


// middleware for static files - static fun is used to make express understand where the static files are and then express can look into the folders and make them public for us to use
app.use(express.static('public'))

app.get('/',(req,res) => {
    const blogs = [
        {title: 'Hoshi finds plants', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Kookie finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{title : 'Home',blogs})
})

app.get('/about',(req,res) => {
    res.render('about',{title : 'About'})
})
 
app.get('/blogs/create',(req,res) => {
    res.render('create',{title : 'Create'})
})
 
app.use((req,res) => {
    res.status(404).render('error',{title : '404'})
})
 