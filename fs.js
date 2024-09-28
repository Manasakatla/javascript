const fs=require('fs');
const content="this is a writeFile concept";
fs.writeFile("two.txt",content,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file created successfully")
})