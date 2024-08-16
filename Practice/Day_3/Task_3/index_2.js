const { error } = require('console');
const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname, 'Crud');
const filepath = `${dirpath}/Demo.txt`;


        // CREATE A FILE 
    	// PS C:\Users\Admin\OneDrive\Desktop\Node.Js Practice\Day_3\Task_3> node .\index_2.js

        // fs.writeFileSync( filepath, 'This Is A Simple File');
        


        // READ FILE WITH BUFFER
        // PS C:\Users\Admin\OneDrive\Desktop\Node.Js Practice\Day_3\Task_3> node .\index_2.js
        // This Is Buffer ----- <Buffer 54 68 69 73 20 49 73 20 41 20 53 69 6d 70 6c 65 20 46 69 6c 65>
        // What Is Buffer ----- A Buffer is a way to store and manipulate binary data in Node. js.

        // fs.readFile(filepath,'utf8',(err,data)=>{
        //     console.log(data);
        // })



        // UPDATE A FILE
        // PS C:\Users\Admin\OneDrive\Desktop\Node.Js Practice\Day_3\Task_3> node .\index_2.js
        // File Is Update

        // fs.appendFile(filepath,'  And This Is A Demo.txt File',(err)=>{
        //     if(!err) console.log("File Is Update");
        // })




        // RENAME THE FILE ( This is not a part of the CRUD operation )
        // PS C:\Users\Admin\OneDrive\Desktop\Node.Js Practice\Day_3\Task_3> node .\index_2.js
        // File Name Is Update

        // fs.rename(filepath,`${dirpath}/Update.txt`,(err)=>{
        //     if(!err) console.log("File Name Is Update");
        // })



        // DELETE A FILE 

        // fs.unlinkSync(`${dirpath}/Update.txt`)
        