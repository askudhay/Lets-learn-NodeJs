const yargs = require('yargs');
const notes = require('./notes');
const _ = require('lodash');

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
    //add note
    if (_.isEmpty(argv.title) || _.isEmpty(argv.body)) {
        console.log('--title and --body must be passed');
    } else {
        var note = notes.addNote(argv.title, argv.body);
        if (note) {
            console.log('Note created', note);
        } else {
            console.log("Note can't be created");
        }
    }
} else if (command === 'list') {
    //list of notes 
    var allNotes = notes.getAll();
    if (allNotes.length !== 0) {
        console.log(allNotes);
    } else {
        console.log("No notes found");
    }

} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found', note);
    } else {
        console.log('Note not found');
    }

} else if (command === 'delete') {
    // delete note
    var result = notes.removeNote(argv.title);
    var msg = result ? 'Note was deleted' : 'Note not found';
    console.log(msg);
} else {
    console.log("Unrecognized command !");
}