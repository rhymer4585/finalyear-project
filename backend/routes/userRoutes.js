const express = require('express');
const router = express.Router();
const User = require('../models/user'); // make sure your file is named user.js

// Register a user
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const user = new User({ name, email, phone });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
