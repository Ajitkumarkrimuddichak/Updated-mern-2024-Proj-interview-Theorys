const express = require("express");
const { getUser } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/users/:id", authMiddleware, getUser);

module.exports = router;
