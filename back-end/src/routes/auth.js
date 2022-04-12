const express = require("express");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const router = express.Router();

// create user
router.post("/users/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  req.body.password = password;
  const user = userModel(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.errors }));
});

// login user
router.post("/users/login", async (req, res) => {
  await userModel
    .findOne({ email: req.body.email })
    .then(async (user) => {
      if (!user) {
        throw "Error in credentials";
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        throw "Error in credentials";
      }
      res.json("welcome");
    })
    .catch((error) => res.status(400).json({ message: error }));
});

module.exports = router;
