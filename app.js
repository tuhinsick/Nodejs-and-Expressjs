const express = require('express');
const morgan = require('morgan');

const oracledb = require('oracledb');

//express app
const app = express();


//register view engine

app.set('view engine','ejs');


//listen for requests


app.listen(3000);

app.use(morgan('tiny'));
app.use(express.static('public'));

app.use((req,res,next) => {
    console.log('new request made: ');
    console.log('host: ', req.hostname );
    console.log('path: ', req.path); 
    console.log('method: ', req.method);
    next();
});

app.use((req,res,next) => {
    console.log("in the next middleware");
    next();
});


app.get('/db',async(req,res) => {
    let con;
    try{
        con = await oracledb.getConnection({
            user       :"hr",
            password   : "hr",
            connectionString : "localhost/orcl"
        });

        const result = await con.execute(
            `SELECT MANAGER_ID, COUNT(*)
             FROM EMPLOYEES 
             GROUP BY MANAGER_ID
            `
        );

        const data = result.rows;
        //console.log(data);
        res.render('db',{title:'Database',data});
    }
    catch(err){
        console.log(err);
    }
    finally {
        if (con) {
            try {
                // Release the connection back to the connection pool
                await con.close();
            } catch (err) {
                console.error(err);
            }
        }
    }

    

});

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


//404 page
app.use((req,res)=>{
    res.status(404).render('404',{title: 'error'});
});