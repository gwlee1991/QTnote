const NotesController = require('../controllers/notes_controllers');

module.exports = (app) => {
  app.get('/api/allnotes', NotesController.allNotes);

  app.post('/api/notes', NotesController.createNotes);
}