const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: {type: String},
  textBody: String,
  date: String,
  body: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  notebook: {
    type: Schema.Types.ObjectId,
    ref: 'notebooks'
  }
});

mongoose.model('notes', noteSchema);