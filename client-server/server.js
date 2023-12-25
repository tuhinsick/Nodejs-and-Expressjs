const http = require('http');
const server = http.createServer((response)=>{
    console.log('request made');
    response.setHeader('Content-Type','text/plain');
    response.write('hello, ninjas');
    response.end();
});

server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000')
})