// const http = require('http');
// const server = http.createServer((request, response)=>{
//     console.log('request made');
//     response.setHeader('Content-Type','text/html');
//     response.write('<p>hello, ninjas</p>');
//     response.write(`<h1>hello tuhin</h1>`);
//     response.write(`<head><link rel="styleseet" href="#"></head>`);
//     response.end();
// });

// server.listen(3000,'localhost',()=>{
//     console.log('listening for request on port 3000')
// })

const http = require('http');
const fs = require('fs');

const _ = require('lodash');

const server = http.createServer((request,response) => {
    //lodash 

    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    response.setHeader('Content-Type','text/html');
    let path = './htmls';
    switch(request.url){
        case '/' : 
          path += '/blog.html';
          response.statusCode = 200;
          break;
        case '/about-us':
            path += '/about.html';
            response.statusCode = 200;
            break;
         default : 
            path += '/error.html';   
            response.statusCode = 404;  
            break;
    }

    fs.readFile(path,(err,data)=>{
        if(err) {
            console.log("khalid");
            console.log(err);
        }
        console.log("tuhin");
        response.end(data);

    })
})


server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
})