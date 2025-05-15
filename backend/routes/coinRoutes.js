const express = require('express');
const router = express.Router();
const Coin = require('../models/Coin');

router.post('/save', async (req, res) => {
  try {
    const coin = new Coin(req.body);
    await coin.save();
    res.status(201).json({ message: 'Coin saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/saved', async (req, res) => {
  try {
    const coins = await Coin.find();
    res.json(coins);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;