const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    description: { type: String, required: true },
    quantity: { type: Number, required: false },
}, {
    timestamps: true,
  });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;