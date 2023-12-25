const fs = require('fs');

const readStream = fs.createReadStream('./js/blog.txt');
const writeStream = fs.createWriteStream('./js/blog2.txt');

// readStream.on('data',(chunk)=>{
//     console.log('--- NEW CHUNK---');
//     writeStream.write('\nNEW CHUNK\n');
//     console.log(chunk);
//     writeStream.write(chunk);
// })


// fs.unlink('./js/blog2.txt',err => {
//     if(err){
//         console.log(err);
//     }
//     console.log('deleted successfully');
// })


readStream.pipe(writeStream);

