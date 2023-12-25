const fs = require('fs'); //

//reading files

// fs.readFile('./js/blog.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }

//     console.log(data.toString());
// })


// console.log('last line');



// writing files
// file na thakle file create kore okhane write kore felbe


// fs.writeFile('./js/blog.txt','hello world',()=>{
//     console.log("file was written");
// })


// create and deletion of a folder

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',err=>{
//         if(err){
//             console.log(err);
//         }
    
//         console.log('folder created');
//     })
// }
// else{
//     fs.rmdir('./assets',err=>{
//         if(err){
//             console.log(err);
//         }

//         console.log('folder deleted');
//     })
// }



// deleting files

if(fs.existsSync('./js/deleteme.txt')){
    fs.unlink('./js/deleteme.txt',err => {
        if(err){
            console.log(err);
        }

        console.log('file deleted');
    })
}