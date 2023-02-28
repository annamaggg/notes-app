/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const NotesModel = require('./notesModel');
const fs = require('fs');

describe('NotesView', () => {
  it('adds notes to the page', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const Nmodel = new NotesModel();
    const NView = new NotesView(Nmodel);

    Nmodel.addNote('Hello');
    Nmodel.addNote('I am a note');

    NView.displayNotes();
    NView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  })
})