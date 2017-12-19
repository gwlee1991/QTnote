const Notebook = require('../models/Notebook');

module.exports = {
  allNotebooks(req, res, next) {
    Notebook.find({})
      .then((notebooks) => {
        res.send(notebooks);
      })
      .catch(next);
  },

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
  }
}