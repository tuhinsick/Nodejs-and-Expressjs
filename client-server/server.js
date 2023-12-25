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

const server = http.createServer((request,response) => {
    console.log(request.url,request.method);
    response.setHeader('Content-Type','text/html');
    if(request.url === "/blogs"){
        fs.readFile('.htmls/blog.html',(err,data)=>{
            if(err){
                console.log(err);
            }
            response.write(data);
        })
    }

    else if(request.url === "/about"){
        fs.readFile('.htmls/about.html',(err,data)=>{
            if(err){
                console.log(err);
            }

            response.write(data);
        })
    }

    else{
        fs.readFile('.htmls/error.html',(err,data)=>{
            if(err){
                console.log(err);
            }

            response.write(data);
        })
    }
    response.end();
})


server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
})