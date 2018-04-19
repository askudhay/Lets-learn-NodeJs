const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteStr = fs.readFileSync('notes-data.json');
        return JSON.parse(noteStr);
    } catch (e) {
        return [];
    }
}

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {

    var note = {
        title,
        body
    };

    var notes = fetchNotes();
    var duplicateNote = notes.filter((note) => note.title === title);

    if (duplicateNote.length === 0) {
        notes.push(note);
        saveNote(notes);
        return note;
    }

}

var getAll = () => {
    return fetchNotes();
}

module.exports = {
    addNote,
    getAll
}