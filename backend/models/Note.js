const mongoose = require('mongoose')


//defining the schema
const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


//defining the model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;