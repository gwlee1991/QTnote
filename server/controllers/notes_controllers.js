const Note = require('../models/Note');

module.exports = {
  allNotes(req, res, next) {
    Note.find({})
      .then((notes) => {
        res.send(notes);
      })
      .catch(next);
  },

  createNotes(req, res, next) {
    const noteProps = req.body;

    Note.create(noteProps)
      .then(note => res.send(note))
      .catch(next);
  }
}