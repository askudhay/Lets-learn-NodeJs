const hmObj = require('./customhellomodule');

//console.log('Value: ', process.argv[2]);
const command = process.argv[2];
if(command === 'sayhello'){
    console.log(hmObj.greet());
} else{
    console.log('Command not recognized !');
}