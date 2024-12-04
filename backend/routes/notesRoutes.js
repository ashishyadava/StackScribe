const express = require("express");
const { getNote, getNotes, createNote, deleteNote } = require("./../controllers/notesController")
const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNote);
router.get("/:id", getNote);

module.exports = router;