const NotesModel = require('./notesModel');

class NotesView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes(instance) {
    //const container = document.querySelector('div#main-container');
    //const model = new NotesModel();

    instance.getNotes().forEach(element => {
      let newNote = document.createElement('div');
      newNote.textContent = element;
      this.mainContainerEl.append(newNote);
    });
  }
}