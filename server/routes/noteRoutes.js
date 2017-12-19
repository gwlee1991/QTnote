const NotesController = require('../controllers/notes_controllers');

module.exports = (app) => {
  app.get('/api/notebooks/:id/notes', NotesController.indexNotes);
  app.post('/api/notes', NotesController.createNotes);
  app.get('/api/notes/:id', NotesController.showNote);
  app.delete('/api/notes/:id', NotesController.removeNote);
  app.put('/api/notes/:id', NotesController.editNote);
}