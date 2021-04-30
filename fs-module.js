//Synchronous and Asynchronous Function

//readFile
//writeFile
//AppendFile
//Delete
//Rename

const fs = require("fs");

//fs.writeFileSync('./contents/demofile.text','We are learning JavaScript.');
//fs.appendFileSync('./contents/demofile.text',' We are learning NodeJs.');

/*fs.rename('./contents/demofile.text', './contents/RenameFile.text', (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("rename successful");
    }
});*/

/*fs.readFile('./contents/RenameFile.text', "utf-8", (err, data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("Before");

fs.readFile('./contents/RenameFile.text', "utf-8", (err, data) => {
    if(err){
        console.log(err);
    } else {
        fs.appendFile('./contents/RenameFile.text',' Is this a Asynchronous Process?');
        fs.readFile('./contents/RenameFile.text', "utf-8", (err, data) => {
            if(err){
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});


console.log("After");*/

//file delete
fs.unlink('./contents/RenameFile.text', (err) => {
    if(!err){
        console.log("file is deleted");
    }
})
