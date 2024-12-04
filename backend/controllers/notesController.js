const Note = require('./../models/Note')

exports.getNote =  (req, res, next) => {

    const id = req.params.id;

    Note.findById(id)
        .then(note => {
          if(note) {
            res.json(note);
          } else {
            res.status(404).end()
          }
        })
        .catch(err => next(err))
    
}

exports.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

exports.createNote = (req, res) => {

    const body = req.body;
  
    if(body.content === undefined) {
      return res.status(400).json({ error: 'content missing'})
    }
  
    const note = new Note({
      content: body.content,
      important: body.important || false,
    })
  
    note.save().then(savedNote => {
      res.json(savedNote);
    })
  
  }

exports.deleteNote =  (req, res) => {
    const id = req.params.id;
    Note.findByIdAndDelete(id)
        .then(result => {
          res.status(204).end()
        })
        .catch(error => next(error))
  }