const osObj = require('os');
const fsObj = require('fs');

console.log('Result: ', osObj.userInfo().username);

fsObj.writeFile('helloworld.txt',"Hello World !!!", function(err){
    console.log(err);
    if(err){
        console.log("Something went wrong");
        throw err;
    }
    console.log("File got created successfully !");
    fsObj.appendFile('helloworld.txt', "Something gonna be added at the eof",function(err){
        if(err){
            console.log("An error occured while trying to append the file");
            throw err;
        }
        console.log('Appended successfully !');
        fsObj.rename('helloworld.txt','day2.txt',(err) => {
            console.log("File has been renamed successfully");
            fsObj.readFile('day2.txt', (err,data) => {
                if(err){
                    console.log("Error in reading file");
                    throw err;
                }
                console.log("File Data", data);
                fsObj.unlink('day2.txt', (err) => {
                    console.log("File deleted successfully !");
                });
            });
        });
       
    });
});





