const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  id: String,
  name: String,
  symbol: String,
  current_price: Number,
  market_cap: Number,
});

module.exports = mongoose.model('Coin', coinSchema);