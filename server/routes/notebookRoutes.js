const NotebookController = require('../controllers/notebooks_controller');

module.exports = (app) => {
  app.get('/api/notebooks', NotebookController.indexNotebooks);
  app.post('/api/notebooks', NotebookController.createNotebooks);
  app.get('/api/notebooks/:id', NotebookController.showNotebook);
  app.put('/api/notebooks/:id', NotebookController.editNotebook);
  app.delete('/api/notebooks/:id', NotebookController.removeNotebook);
}