const Notebook = require('../models/Notebook');

module.exports = {
  createNotebooks(req, res, next) {
    const notebookProps = req.body;
    Notebook.create(notebookProps)
      .then(notebook => {
        res.send(notebook)
      })
      .catch(next);
  },

  indexNotebooks(req, res, next) {
    // make sure to pass just the userId from the frontend
    const userId = req.body;

    Notebook.find({ author: userId })
      .then(notebooks => res.send(notebooks))
      .catch(next);
  },

  showNotebook(req, res, next) {
    const notebookId = req.params.id;

    Notebook.findOne({ _id: notebookId })
      .then(notebook => res.send(notebook))
      .catch(next);
  },

  editNotebook(req, res, next) {
    const notebookId = req.params.id;
    const notebookProps = req.body;

    Notebook.findByIdAndUpdate({ _id: notebookId }, notebookProps)
      .then(() => Notebook.findById({ _id: notebookId }))
      .then(notebook => res.send(notebook))
      .catch(next);
  },

  removeNotebook(req, res, next) {
    const notebookId = req.params.id;

    Notebook.findByIdAndRemove({ _id: notebookId })
      .then(notebook => res.status(204).send(notebook))
      .catch(next);
  }
}