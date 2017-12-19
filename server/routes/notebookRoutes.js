const NotebookController = require('../controllers/notebooks_controller');

module.exports = (app) => {
  app.get('/api/allnotebooks', NotebookController.allNotebooks);
  app.get('/api/:id/notebooks', NotebookController.indexNotebooks);

  app.post('/api/notebooks', NotebookController.createNotebooks);
}