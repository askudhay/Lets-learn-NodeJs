const url = require('url');
const http = require('http');
const notes = require('./notes');
const _= require('lodash');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
   
    var r = url.parse(req.url, true); 
    var command= url.parse(req.url).pathname;
    var jsonObj = r.query;
    var titleString=jsonObj['title'];
    var bodyString=jsonObj['body'];
  
var out=null;
    if (command === '/add') {
        //add note
       if(!_.isEmpty(titleString) || !_.isEmpty(bodyString)){
        var note = notes.addNote(titleString, bodyString);
        if (note) {
            out=note;
            console.log('Note created', note);
        } else {
            console.log("Note can't be created");
        }
    }
    else{
       console.log('title OR Body is Empty'); 
    }
    } else if (command === '/list') {
        //list of notes 
        var allNotes = notes.getAll();
        if (allNotes.length !== 0) {
            out=allNotes;
            console.log(allNotes);
        } else {
            console.log("No notes found");
        }
    
    } else if (command === '/read') {
        var note = notes.getNote(titleString);
        if(note){
            out=note;
            console.log('Note found', note);
        } else{
            console.log('Note not found');
        }
    
    } else if (command === '/delete') {
        // delete note
        var result = notes.removeNote(titleString);
        var msg = result?'Note was deleted':'Note not found';
        out=msg;
        console.log(msg);
    } else {
        console.log("Unrecognized command !");
    }
    
    res.write(JSON.stringify(out));
    res.end();
}).listen(8080, ()=>{
    console.log("Server started at port no 8080");
});

