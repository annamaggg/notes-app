const NotesModel = require("./notesModel");
const model = new NotesModel();


const NotesView = require('./notesView');
const view = new NotesView();

model.addNote('Hi there');
model.addNote('My name is Anna');
model.addNote('I am happy');

view.displayNotes(model);
