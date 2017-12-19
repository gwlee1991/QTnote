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
      .then(notebook => res.send(notebookProps))
      .catch(next);
  }
}