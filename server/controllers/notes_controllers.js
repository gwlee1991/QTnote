const Note = require('../models/Note');

module.exports = {
  indexNotes(req, res, next) {
    const notebookId = req.params.id;
    Note.find({ notebook: notebookId })
      .then(notes => res.send(notes))
      .catch(next);
  },

  createNotes(req, res, next) {
    const noteProps = req.body;
    Note.create(noteProps)
      .then(note => res.send(note))
      .catch(next);
  },

  showNote(req, res, next) {
    const noteId = req.params.id;

    Note.findById({ _id: noteId })
      .then(note => res.send(note))
      .catch(next);
  },

  removeNote(req, res, next) {
    const noteId = req.params.id;

    Note.findByIdAndRemove({ _id: noteId })
      .then(note => res.state(204).send(note))
      .catch(next);
  },

  editNote(req, res, next) {
    const noteId = req.params.id;
    const noteProps = req.body;

    Note.findByIdAndUpdate({ _id: noteId }, noteProps)
      .then(() => Note.findById({ _id: noteId }))
      .then(note => res.send(note))
      .catch(next);
  }
}