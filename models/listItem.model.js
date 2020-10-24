const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    description: { type: String, required: true },
    quantity: { type: Number, required: false },
}, {
    timestamps: true,
  });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;