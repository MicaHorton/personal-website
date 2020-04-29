const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  message: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;