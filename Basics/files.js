// working with file system with fs module
const fs = require('fs');

//reading files
// reafile is asyncronous function -- takes some time and runs a callback fnc after completion, dosen't block the code
fs.readFile('./docs/doc1.txt',(err,data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
})

// writing files
fs.writeFile('./docs/doc1.txt', 'Hello World !',() =>{
    console.log('file created...!');
});

fs.writeFile('./docs/doc2.txt','Hello World ...!',() =>{
    console.log('file created1..!');
});

// Directories
if(! fs.existsSync('./assets')){

    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created..:)');
    })
} else{
   fs.rmdir('./assets',(err) =>{
    if(err){
        console.log(err);
    }
    console.log('Folder deleted..!');
   })  
}

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err) => {
        if(err){
            console.log(err);
        }
        console.log('File Deleted !!')
    })
}

