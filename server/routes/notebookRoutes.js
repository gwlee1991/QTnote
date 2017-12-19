const NotebookController = require('../controllers/notebooks_controller');

module.exports = (app) => {
  app.get('/api/allnotebooks', NotebookController.allNotebooks);

  app.post('/api/notebooks', NotebookController.createNotebooks);
}