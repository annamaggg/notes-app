const NotesModel = require('./notesModel');

class NotesView {
  constructor(model) {
    this.notesmodelInstance = model;

    this.mainContainerEl = document.querySelector('#main-container');
    this.inputBox = document.querySelector('#input-note');
    this.submitButton = document.querySelector('#note-button')

    this.submitButton.addEventListener('click', () => {

      let newNote = this.inputBox.value;
      this.notesmodelInstance.addNote(newNote);
      this.displayNotes(this.notesmodelInstance);
      this.inputBox.value = '';

    })
  }

  displayNotes() {
    //const container = document.querySelector('div#main-container');
    //const model = new NotesModel();
    document.querySelectorAll('.note').forEach(el => {
      el.remove();
    });

    this.notesmodelInstance.getNotes().forEach(element => {
      
      let newNote = document.createElement('div');
      newNote.className = 'note';
      newNote.textContent = element;
      this.mainContainerEl.append(newNote);

    });
  }
}

module.exports = NotesView;