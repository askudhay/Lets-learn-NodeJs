const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',(req, res)=>{
    res.send('Home page');
});

app.get('/add',(req, res)=>{
    res.send('Add page');
});

app.get('/delete',(req, res)=>{
    res.send('Delete page');
});

app.get('/list',(req, res)=>{
    res.send('List page');
});

app.get('/read',(req, res)=>{
    res.send('Read page');
});

app.listen(3000, () => {
    console.log('Server started at port 3000 !');
});