const mongoose = require('mongoose');
const { Schema } = mongoose;

const notebookSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'notes'
  }],
  title: {
    type: String,
    unique: true
  }
});

const Notebook = mongoose.model('notebooks', notebookSchema);

module.exports = Notebook;