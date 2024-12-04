const express = require("express");
const router = express.Router();
const { createUser, getUsers, authenticateUser } = require('./../controllers/usersControllers')


router.post("/", createUser);
router.get("/", getUsers);
router.post("/login", authenticateUser);

module.exports = router;