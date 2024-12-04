const express = require('express')
const connectDB = require('./mongo');
const cors = require('cors');
const notesRouter  = require('./routes/notesRoutes')
const usersRouter = require("./routes/usersRoutes");
const app = express()

//using json parser middleware
//Without the json-parser, the body property would be undefined. The json-parser takes the JSON data
// of a request, transforms it into a JavaScript object and then attaches it to the body property of 
//the request object before the route handler is called.
app.use(express.json())

app.use(cors());

connectDB();

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.use('/notes', notesRouter);
app.use('/users', usersRouter);

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})