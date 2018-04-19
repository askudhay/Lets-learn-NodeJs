const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

if(command === 'add'){
//add note
   var note = notes.addNote(argv.title, argv.body);
   if(note){
        console.log('Note created', note);
   } else{
       console.log("Note can be created");
   }
} else if(command === 'list'){
//list of notes 
    var allNotes = notes.getAll();
    if(allNotes.length !== 0){
        console.log(allNotes);
    } else{
        console.log("No notes found");
    }
   
} else if(command === 'read'){
// read note
} else if(command === 'delete'){
// delete note
} else{
    console.log("Unrecognized command !");
}