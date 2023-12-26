const express = require('express');

//express app
const app = express();


//register view engine

app.set('view engine','ejs');


//listen for requests


app.listen(3000);

app.get('/',(req,res) =>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum and tell nabiha what i feel for her'},
        {title: 'Mario finds stars', snippet: 'Dont dare about anything and propose ntahseen'},
        {title: `Initialize the process`, snippet: `I really like nabiha why cannott i tell her that?`},
        {title: 'Feelings for Nabiha', snippet: 'I feel pretty jealous when u talk with other bois. I really like uu.. I feel for u.. I dont want to express this feelings and i know u absolutely Dont feel for me. So better we dont text each other.. Good bye and dont text me.'}
    ];
    res.render('index',{title: 'Home',blogs});
});

app.get('/about',(req,res) =>{
    res.render('about',{title: 'About'});
});


//redirect page
app.get('/about-us',(req,res) => {
    res.redirect('/about');
});

app.get('/blogs/create',(req,res) => {
    res.render('create',{title: 'Create'});
});

app.use((req,res)=>{
    res.status(404).render('404',{title: 'error'});
});