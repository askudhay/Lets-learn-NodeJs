const fsObj = require('fs');
const command = process.argv[2];

if(command === 'write'){
    fsObj.writeFile('helloworld.txt',"Hello World !!!", function(err){      
        if(err){
            console.log("Some error occured");
            throw err;
        }
        console.log('File has been created');
    });
} else if(command === 'read'){
    fsObj.readFile('helloworld.txt','utf8', (err,data) => {
        if(err){
            console.log("No such file exists, try rerunning with write as command");
            //throw err;
        } else{
            console.log('Data: ', data);
        }
    });
}