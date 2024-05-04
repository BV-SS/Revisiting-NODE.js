const express = require('express');

const app  = express(); 

// register ejs
app.set('view engine','ejs');

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
 
app.listen(3000,() => {
    console.log('listining to port 3000');
})