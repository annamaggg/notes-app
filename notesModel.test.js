const NotesModel = require('./notesModel');

describe('notesModel', () => {
  it('adds notes', () => {
    const notes = new NotesModel();
    notes.addNote('I am a note');
    expect(notes.getNotes()).toEqual(['I am a note']);
  })
  it('resets notes', () => {
    const notes = new NotesModel();
    notes.addNote('hi');
    notes.addNote('hello');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  })
})